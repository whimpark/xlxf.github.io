# Kafka事务消息

Kafka自身有事务机制，但不属于<mark>分布式事务</mark>范畴  
Kafka与其他数据库无法实现事务控制  

********
## 事务方案： 
- 1、增加同库消息表
- 2、业务数据与消息数据同时入库，事务控制
- 3、消息发送：业务触发保证实时效果，定时任务触发保证**最终一致性**效果

********
## 触发逻辑：
- 业务触发：业务数据和消息数据入库后，立即发送消息
- 任务触发：定时任务触发，读取消息表，并发送消息


## 延时补偿：定时任务周期为T1，延时补偿时间为T2：
- 业务触发与任务触发可能会同时进行，导致重复发送消息
- 在任务触发中加入延时补偿机制，避免与业务触发逻辑冲突
- 延时逻辑：任务触发时，[1]查询消息表状态为1的数据，[2]查询状态为0且在T2分钟前创建的数据。


## 补偿时效，
- 业务触发失败并修改状态为1，则补偿时效为（0 ~ T1）
- 业务触发异常，状态仍为0，则补偿时效为（T2 ~ T1+T2）


## 最大补偿次数：
- 防止长期故障，导致消息积压，系统崩溃
- 

## 多实例：
- 定时任务作分片处理
- 业务触发分违反分片规则


