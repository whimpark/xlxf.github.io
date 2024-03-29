
# Elastisearch硬件资源规划


## 重点规划
- 磁盘容量
- 集群规格
- 索引的shard大小和数量
- 索引的副本数量

## 磁盘容量

考虑因素：原始数据大小、副本数量、索引开销、操作系统预留、Elasticsearch内部开销、安全阈值

### 原始数据大小

#### 数据库表：t_apply_risk





参考：https://blog.csdn.net/yht520100/article/details/121615654


在使用阿里云Elasticsearch前，请先评估集群所需的资源容量，包括磁盘容量、集群规格、shard大小和数量等。本文根据实际测试结果和用户使用经验，提供了相对通用的评估方法。您可以参考本文的内容，初步规划集群的规格容量，以此为依据购买或升配集群。

注意事项
由于不同用户在数据结构、查询复杂度、数据量大小、性能及数据变化等方面的需求不同，所以本文的评估不一定适用于所有用户。建议您在条件允许的情况下，通过实际的数据和使用场景测试出适合自己的集群规格容量规划。

磁盘容量评估
影响阿里云Elasticsearch集群磁盘空间大小的因素包括：

副本数量：至少1个副本。
索引开销：通常比源数据大10%（_all参数等未计算）。
操作系统预留：默认操作系统会保留5%的文件系统供您处理关键流程、系统恢复以及磁盘碎片等。
Elasticsearch内部开销：段合并、日志等内部操作，预留20%。
安全阈值：通常至少预留15%的安全阈值。
根据以上因素得到：最小磁盘总大小 = 源数据大小 * 3.4。计算方式如下。

磁盘总大小 = 源数据 *（1 + 副本数量）* 索引开销 /（1 - Linux预留空间）/（1 - Elasticsearch开销）/（1 - 安全阈值）

= 源数据 *（1 + 副本数量）* 1.7

= 源数据 * 3.4

说明

对于_all这项参数，如果不需要在业务上使用，通常建议您禁止或者有选择性地添加。
如果您需要开启_all参数的索引，磁盘容量的开销也会随之增大。根据测试结果和使用经验，建议在上述评估的基础上，增加空间至原来的1.5倍，即：磁盘总大小 = 源数据 *（1 + 副本数）* 1.7 *（1 + 0.5）= 源数据 * 5.1。
针对数据量较大的场景，阿里云Elasticsearch商业版6.7和7.4版本下的高效云盘支持单节点的最大容量为20TB，新购时请按需选择。对于已购买的6.7.0版本实例，请先确保内核补丁已升级到最新版本（升级版本），然后按需扩容磁盘，详情请参见升配集群。
集群规格评估
阿里云Elasticsearch的单机规格在一定程度上限制了集群的能力，本文根据测试结果和使用经验给出如下建议：

集群最大节点数：集群最大节点数 = 单节点CPU * 5。
单节点最大数据量。使用场景不同，单节点最大承载数据量也会不同，具体如下：
数据加速、查询聚合等场景：单节点磁盘最大容量 = 单节点内存大小（GB）* 10。
日志写入、离线分析等场景：单节点磁盘最大容量 = 单节点内存大小（GB）* 50。
通常情况：单节点磁盘最大容量 = 单节点内存大小（GB）* 30。
本文以下面的集群规格为例，按照以上计算方式，得到的单节点最大数据量如下表所示。

规格	最大节点数	单节点磁盘最大容量（查询）	单节点磁盘最大容量（日志）	单节点磁盘最大容量（通常）
2核4 GB	10	40 GB	200 GB	120 GB
2核8 GB	10	80 GB	400 GB	240 GB
4核16 GB	20	160 GB	800 GB	480 GB
8核32 GB	40	320 GB	1.5 TB	960 GB
16核64 GB	80	640 GB	2 TB	1.9 TB
更多类型的规格信息，请参见阿里云Elasticsearch定价。

Shard评估
Shard大小和数量是影响阿里云Elasticsearch集群稳定性和性能的重要因素之一。Elasticsearch集群中任何一个索引都需要有一个合理的shard规划。合理的shard规划能够防止因业务不明确，导致分片庞大消耗Elasticsearch本身性能的问题。

说明 Elasticsearch 7.x以下版本的索引默认包含5个主shard，1个副shard；Elasticsearch 7.x及以上版本的索引默认包含1个主shard，1个副shard。

在进行shard规划前，请先考虑以下几个问题：

当前单个索引的数据多大
数据是否会持续增长
购买的实例规格多大
是否会定期删除或者合并临时索引
基于以上问题，下文对shard规划提供了一些建议。这些建议仅供参考，实际业务中还需根据需求进行调整：

建议在分配shard前，对Elasticsearch进行数据测试。当数据量很大时，要减少写入量的大小，降低Elasticsearch压力，建议选择多主1副本；当数据量较小，且写入量也比较小时，建议使用单主多副本或者单主1副本。
建议一个shard的存储量保持在30 GB以内（最优），特殊情况下，可以提升到50 GB以内。如果评估结果超过该容量，建议在创建索引之前，合理进行shard分配，后期进行reindex，虽然能保证不停机，但是比较耗时。
说明 对于评估数据量低于30 GB的业务，也可以使用1主多备的策略进行负载均衡。例如20 GB的单索引，在5个数据节点中，可以考虑1主4副本的shard规划。

对于日志分析或者超大索引场景，建议单个shard大小不要超过100 GB。
建议shard的个数（包括副本）要尽可能等于数据节点数，或者是数据节点数的整数倍。
说明 主分片不是越多越好，因为主分片越多，Elasticsearch性能开销也会越大。

建议单个节点上同一索引的shard个数不要超5个。
建议按照以下说明，评估单个节点上全部索引的shard数量：
单个数据节点的shard数量 = 当前节点的内存大小 * 30（小规格实例参考）
单个数据节点的shard数量 = 当前节点的内存大小 * 50（大规格实例参考）
注意
在评估shard数量时，还需结合数据量进行分析，建议TB级别以下的数据量参考小规格实例进行评估。

在单节点上，7.x版本的实例默认的shard的上限为1000个（官方不建议调整），建议在使用前通过扩容节点来调整单节点的shard数量。

建议按照1:5的比例添加独立的协调节点（2个起），CPU:Memory为1:4或1:8。例如10个8核32 GB的数据节点，建议配置2个8核32 GB的独立协调节点。
说明 使用独立的协调节点，可以对最终的结果进行reduce操作，这样即使reduce阶段出现GC严重的现象，也不会影响数据节点。

如果开启了自动创建索引功能，建议启用索引生命周期管理，或者通过Elasticsearch API脚本删除此类索引。
建议及时清理小索引（同样会占用Elasticsearch堆内存）。