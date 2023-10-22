

# Elasticsearch基本规范

### 1、Elasticsearch介绍

https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html   
索引存储数据，并提供搜索和分析引擎

场景：   
- 数据量大
- 读多写少
- 检索条件复杂

### 2、Elasticsearch类型介绍
**2.1 类型族**

- Common types  
- Objects and relational types  
- Structured data types  
- Aggregate data types    
- Document ranking types  
- Spatial data types  
- Other types  

**2.2 常用类型**

类型 | 描述 
---  | ---
boolean |true and false values.   
Dates   |Date types, including date and date_nanos.  
Numbers |Numeric types, such as long and double, used to express amounts. 
Keywords|The keyword family, including keyword, constant_keyword, and wildcard.  
text    |The text family, including text and match_only_text. Analyzed, unstructured text.
binary  |Binary value encoded as a Base64 string.  
object  |A JSON object.
ip      |IPv4 and IPv6 addresses.
array   |arrays do not require a dedicated field data type. 对象数组应该为nested类型


**2.3 其他类型**

类型 | 描述 
---  | ---
constant_keyword | 常量，提升索引效率  
wildcard   |类似 Mysql 中的 like 模糊匹配，解决分词不准确问题，但性能较差
match_only_text    | 对text字段在存储空间方面的优化
binary  |Binary value encoded as a Base64 string.  
Nested  |解决对象数组的查询问题


**2.4 类型映射**


字段类型 | Elasticsearch类型 |	说明
--- |--- | ---  
string，varchar	|keyword	|这是不可标记的文本字段，例如 CODE001
string，varchar，text	|text	|这是要标记化的文本字段，例如 a nice text
integer	|integer	|这是一个整型（32位），例如 1、2、3
long	|long	|这是一个长整型（64位）
float	|float	|这是一个浮点数（32位），例如 1.2 或 4.5
double	|double	|这是一个 double 类型浮点数（64位）
boolean	|boolean	|这是一个布尔值：true 或 false
date / datetime	|date |这是一个日期时间值
bytes / binary	|binary	|这包含一些用于二进制数据的字节，例如文本或字节流


**2.5 类型对比**

**Text**  
**特点**  
1: 支持分词，全文检索,支持模糊、精确查询,不支持聚合,排序操作;  
2: Text类型的最大支持的字符长度无限制,适合大字段存储；  

**使用场景**：  
 存储全文搜索数据, 例如: 邮箱内容、地址、代码块、博客文章内容等。  
 默认结合standard analyzer(标准解析器)对文本进行分词、倒排索引。   
    
**keyword**  
**特点**  
1:不进行分词，直接索引,支持模糊、支持精确匹配，支持聚合、排序操作。  
2:keyword类型的最大支持的长度为——32766个UTF-8类型的字符,可以通过设置ignore_above指定自持字符长度，超过给定长度后的数据将不被索引，无法通过term精确匹配检索返回结果。  

**使用场景：**   
存储邮箱号码、url、name、title，手机号码、主机名、状态码、邮政编码、标签、年龄、性别等数据。  
用于筛选、排序、聚合(统计)。  
直接将完整的文本保存到倒排索引中。      

### 3、字段命名规范

参考Elasticsearch的命名规范、MySQL数据库的命名规范：**字段名称以下划线分隔单词**
> 如：apply_risk_id


### 4、索引命名规范
**索引前缀**     
某些团队会约定索引以【xxx-】开头  
> 如果使用sql命令查询索引，不支持【-】，需要增加双引号并转义

**索引核心词汇**  
以下划线分隔核心词汇，保持与mysql的规范一致

**索引别名**  
业务系统仅使用索引别名，实际索引名为别名+版本编号  
> 业务解耦，方便reindex

**索引版本编号**  
用于区分索引别名及reindex操作

**索引命名举例**  

header 1 | header 2
---|---
前缀|xxx  
核心词汇|apply_risk  
版本编号|01  
索引名|xxx-apply_risk-01  

### 5、索引设计规范

**设计索引规则**

不允许自动创建索引，应该提前设计索引规则，如副本数、分片数等

**设计索引结构**

应该提前设计mapping结构，如字段类型等

**估算索引的存储量**

为设计索引规则提供依据


**分片数量（与容量相关）**  
https://www.elastic.co/guide/en/elasticsearch/reference/8.1/size-your-shards.html  
单个分片：10G - 50G  
分片数量与节点数量关系：倍数  

每个节点的分片数量=向上取整(总容量/节点数量/50G)  
总分片数量=每个节点的分片数量= * 节点数量  

**分片数量（与内存相关）**  
单个节点的分片数量过大，会消耗过多的CPU和内存
单个节点每GB内存，对应20个分片或者更少。

**副本数量**   
多副本可以提升搜索能力及数据安全可靠，但副本数过多会增加存储容量和增加同步写入副本数据的压力，一般设置2个即可。
针对核心数据可以增加副本数量，比如4个副本，通过冗余存储提升数据安全性及搜索吞吐量。

**准实时特性**  
准实时的写入，默认情况下索引的refresh_interval为1秒。所以在必须写入数据1秒后，再进行读取。

