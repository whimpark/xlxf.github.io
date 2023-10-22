# Elasticsearch Client


分析整理springboot与elasticsearch的版本兼容情况
分析整理多种elasticsearch client的应用场景

 
## 版本兼容问题
https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#preface.versions
Spring Data Release TrainSpring Data ElasticsearchElasticsearchSpring FrameworkSpring Boot2021.1 (Q)[1]4.3.x[1]7.15.25.3.x[1]2.5 .x[1]2021.0 (Pascal)4.2.x7.12.05.3.x2.5.x2020.0 (Ockham)4.1.x7.9.35.3.22.4.xNeumann4.0.x7.6.25.2.122.3.xMoore3.2.x6.8.125.2.122.2.xLovelace[2]3.1.x[2]6.2.25.1.192.1.xKay[2]3.0.x[2]5.5.05.0.132.0.xIngalls[2]2.1.x[2]2.4.04.3.251.5.x


当前Elasticsearch版本：8.1.x、7.17.x

### 1、Spring生态
>spring-boot-starter-parent:1.5.20.RELEASE
>spring-boot-starter-data-elasticsearch:1.5.20.RELEASE
>spring-data-elasticsearch:2.1.20.RELEASE
>Elasticsearch：2.4.0

### 2、开源组件：esclientrhl
esclientrhl可以支持Elasticsearch 7.x的版本
esclientrhl使用 Spring Framework 5 + Springboot 2.x构建
但CMBC使用Spring Framework 4.23 + Springboot 1.5构建
其中FactoryBean（包括但不限于）存在差异，导致esclientrhl官方版本无法直接使用，需要对esclientrhl源码进行修改，适配Spring Framework 4.23 + Springboot 1.5才能使用。

### 3、SQL
Elasticsearch 6.3+开始支持SQL查询
Elasticsearch SQL是一个X-Pack组件，它允许针对Elasticsearch实时执行类似SQL的查询。

X-Pack是Elastic Stack扩展功能，提供安全性，警报，监视，报告，机器学习和许多其他功能。 ES7.0+之后，默认情况下，当安装Elasticsearch时，会安装X-Pack，无需单独再安装。
Elastic Stack 包含各种功能（之前统一称为 X-Pack）
https://www.elastic.co/cn/elastic-stack/features


## Client


9200：HTTP客户端（Rest Client）
9300：节点客户端（Node client），传输客户端（Transport client）
节点客户端：实际上是一个集群中的节点（但不保存数据，不能成为主节点）
传输客户端：作为一种轻量级客户端，本身不加入集群，只是简单的发送请求到远端集群中的节点,作为一个集群和应用程序之间的通信层。


### Java Transport Client （since 0.9)
https://www.elastic.co/guide/en/elasticsearch/client/java-api/index.html
https://www.elastic.co/guide/en/elasticsearch/client/java-api/0.90/index.html

### Java REST Client（since 5.0）
https://www.elastic.co/guide/en/elasticsearch/client/java-rest/5.0/index.html

### Java Low Level REST Client:（since 5.6）
https://www.elastic.co/guide/en/elasticsearch/client/java-rest/5.6/java-rest-overview.html
the official low-level client for Elasticsearch. It allows to communicate with an Elasticsearch cluster through http. Leaves requests marshalling and responses un-marshalling to users. It is compatible with all Elasticsearch versions.
Java High Level REST Client: （since 5.6，Added in 6.0.0-beta1.）
https://www.elastic.co/guide/en/elasticsearch/client/java-rest/5.6/index.html
the official high-level client for Elasticsearch. Based on the low-level client, it exposes API specific methods and takes care of requests marshalling and responses un-marshalling.
 
- 依赖最小
- 所有可用节点，会负载平衡
- 在节点故障和响应特定状态码的情况下会进行故障转移
- 连接失败会进行处罚（失败的节点是否重试，取决于连续失败的次数，失败次数越多，客户端等待的时间越长）
- 持久连接
- 跟踪记录请求和响应的日志
- 可选的自动发现群集节点






### Java Transport Client (deprecated)
https://www.elastic.co/guide/en/elasticsearch/client/java-api/7.0/transport-client.html
Deprecated in 7.0.0.  Removed in 8.0
The TransportClient is deprecated in favour of the Java High Level REST Client and will be removed in Elasticsearch 8.0. The migration guide describes all the steps needed to migrate.

### The High Level REST Client (deprecated)
https://www.elastic.co/guide/en/elasticsearch/client/java-rest/7.15/java-rest-high.html
Deprecated in 7.15.0.
The High Level REST Client is deprecated in favor of the Java API Client.

### Java Client
https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/index.html
https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/7.16/introduction.html
基于Java Low Level REST Client
The Elasticsearch Java API Client is an entirely new client library that has no relation to the older High Level Rest Client (HLRC). This was a deliberate choice to provide a library that is independent from the Elasticsearch server code and that provides a very consistent and easier to use API for all Elasticsearch features.

// hlrc and esClient share the same httpClient
https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/7.16/migrate-hlrc.html




## Community Contributed Clients
Also see the official Elasticsearch Java client.
Flummi: Java Rest client with comprehensive Query DSL API.
Jest: Java Rest client.

#### JEST
https://github.com/searchbox-io/Jest
JEST - This project is no longer being actively developed
#### Flummi
https://github.com/otto-de/flummi




## 开源封装：spring-data-elasticsearch
### 版本兼容问题
https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#preface.versions

>spring-boot-starter-parent:1.5.20.RELEASE
>spring-boot-starter-data-elasticsearch:1.5.20.RELEASE
>spring-data-elasticsearch:2.1.20.RELEASE
>Elasticsearch：2.4.0

#### spring-data-elasticsearch:2.1.20.RELEASE
https://docs.spring.io/spring-data/elasticsearch/docs/2.1.20.RELEASE/reference/html/
Using the Transport Client or Node Client element registers an instance of Elasticsearch Server in the context.
1、Transport Client   
2、Node Client   

#### spring-data-elasticsearch:current
https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#preface.versions
当前版本支持三种 elasticsearch clients
1、Transport Client   
2、High Level REST Client   
3、Reactive Client   


## 开源封装：ESClientRHL
https://github.com/dushougudu/ESClientRHL
https://gitee.com/zxporz/ESClientRHL.git
目前（2019）spring-data-elasticsearch底层采用es官方TransportClient，而es官方计划放弃TransportClient，工具以es官方推荐的RestHighLevelClient进行封装
spring-data-elasticsearch支持的api有限，而EsClientRHL支持更丰富的api调用

###  选择EsClientRHL原因
- 目前spring-data-elasticsearch底层采用es官方TransportClient，而es官方计划放弃TransportClient，工具以es官方推荐的RestHighLevelClient进行封装
- spring-data-elasticsearch支持的api有限，而EsClientRHL支持更丰富的api调用
- 能够极大简化java client API，并不断更新，让es更高级的功能更轻松的使用
- 支持两种自动化的功能，减轻开发者工作量，使其更专注于业务开发
- 支持启动自动扫描elasticsearch索引实体类，并为没有索引结构的实体自动创建索引结构
- 支持开发者只定义一个接口，就拥有了常用与es交互的黑魔法
- 组件中包含了：es索引数据增删改、es查询、es数据分析等丰富的API工具，开发者可以通过EsClientRHL来参考在java中如何与elasticsearch进行各种交互
- EsClientRHL中部分API结合了实际场景中最佳实践的使用方法
- 总之ESClientRHL能给您带来帮助，那它就有存在的价值，如果对您有些许帮助，请不吝Starhttps://gitee.com/zxporz/ESClientRHL


## 语言
领域特定语言：DSL(Domain Specific Language)，为了解决某一类任务而专门设计的计算机语言
通用编程语言：GPL(General Purpose Language)，如Objective-C、Java、Python等
事件查询语言：EQL(Event Query Language )，一种用于基于事件的时间序列数据（例如日志，指标和跟踪）的查询语言。EQL 在 Elastic Security 中被广泛使用。
结构化查询语言：SQL（Structured Query Language）
Elastic 通用模式：ECS (Elastic Common Schema) 





