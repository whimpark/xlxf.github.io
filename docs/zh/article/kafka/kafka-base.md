# Kafka基础

-------------------------------------
#### Kafka基础配置

```
## 并行处理线程
concurrency=3
## 消费端自动确认消息
enable-auto-commit=false
## 批量消息的最大拉取数量
max-poll-records=100
## 设置允许批量消费
setBatchListener(true);
## 设置确认消息模式，手动确认、立即确认
setAckMode(AckMode.MANUAL_IMMEDIATE)

```
#### 封装多线程处理逻辑

Kafka消费端收到多条消息后，会使用线程池来异步处理每条消息，最终同步等待执行完成

```java

    private void submitConsumeTask(String message, CountDownLatch countDownLatch) {
        consumeExecutor.submit(() -> {
            try {
                onDealMessage(message);
            } catch (Exception ex) {
                log.error("on DealMessage exception:", ex);
            } finally {
                countDownLatch.countDown();
            }
        });
    }
    
    @Bean(CONSUMER_EXECUTOR)
    public ExecutorService consumerThreadPool(
            @Value("${consumer.threadpool.min}") int consumerThreadMin,
            @Value("${consumer.threadpool.max}") int consumerThreadMax
    ) {
        ExecutorService es = new ThreadPoolExecutor(
                consumerThreadMin,
                consumerThreadMax,
                30,
                TimeUnit.SECONDS,
                new LinkedBlockingQueue<>(),
                new ThreadPoolExecutor.AbortPolicy());
        log.info("埋点数据专用线程池初始化完成，核心线程数：{{}}，最大线程数：{{}}", consumerThreadMin, consumerThreadMax);
        return es;
    }
```

#### 封装消息确认逻辑
Kafka消费端同步等待各线程结果后，统一向Kafka服务端发送确认信息，业务逻辑不需要再关注消息确认的事项

```java
    void threadDeal(List<String> msgList, Acknowledgment ack) {
        CountDownLatch countDownLatch = new CountDownLatch(msgList.size());
        for (String message : msgList) {
            submitConsumeTask(message, countDownLatch);
        }
        try {
            countDownLatch.await();
        } catch (InterruptedException e) {
            log.error("countDownLatch exception ", e);
            Thread.currentThread().interrupt();
        }
        ack.acknowledge();
        log.info("finish commit offset");
    }
```

#### 封装异常捕捉

Kafka消费端统一捕获业务处理的异常及线程同步等待中断的异常，不影响向Kafka服务端发送消息确认

```java
    void threadDeal(List<String> msgList, Acknowledgment ack) {
        CountDownLatch countDownLatch = new CountDownLatch(msgList.size());
        for (String message : msgList) {
            submitConsumeTask(message, countDownLatch);
        }
        try {
            countDownLatch.await();
        } catch (InterruptedException e) {
            log.error("countDownLatch exception ", e);
            Thread.currentThread().interrupt();
        }
        ack.acknowledge();
        log.info("finish commit offset");
    }
    
    private void submitConsumeTask(String message, CountDownLatch countDownLatch) {
        consumeExecutor.submit(() -> {
            try {
                onDealMessage(message);
            } catch (Exception ex) {
                log.error("on DealMessage exception:", ex);
                //AlarmUtils.sendSMSWithC200Client(1); //不直接发送短息

            } finally {
                countDownLatch.countDown();
            }
        });
    }
```

#### 存在的问题

##### 多线程处理问题

Kafka消费端实际支持通过设置concurrency来实现多线程消费
但当前系统逻辑在Kafka消费线程中，再次开启多线程处理消息，最终同步等待执行结果
增加业务逻辑复杂度，性能也难以得到提升，此外共用了其他业务的线程池，增加耦合度，后期难以维护




##### 数据丢失问题

但当前系统逻辑捕捉了所有的业务异常，并不影响向Kafka服务端确认消息，容易造成消息的丢失。如果业务逻辑处理消息异常，没有机会再次消费重试，导致消息永久丢失。












