# Elasticsearch核心配置


### spring-data-elasticsearch文档


https://docs.spring.io/spring-data/elasticsearch/docs/4.0.1.RELEASE/reference/html/#elasticsearch.clients


#### Sniffer

允许从正在运行的Elasticsearch集群中自动发现节点并将它们设置到现有的RestClient实例的最小的库，它默认使用节点信息api检索属于集群的节点，并使用jackson解析获得的json响应。
LowLevelClient层的配置

### 配置方式

#### 手动配置：ClientConfiguration ->RestHighLevelClient

ClientConfiguration

```java
HttpHeaders httpHeaders = new HttpHeaders();
httpHeaders.add("some-header", "on every request")                      

ClientConfiguration clientConfiguration = ClientConfiguration.builder()
  .connectedTo("localhost:9200", "localhost:9291")                      
  .useSsl()                                                             
  .withProxy("localhost:8888")                                          
  .withPathPrefix("ela")                                                
  .withConnectTimeout(Duration.ofSeconds(5))                            
  .withSocketTimeout(Duration.ofSeconds(3))                             
  .withDefaultHeaders(defaultHeaders)                                   
  .withBasicAuth(username, password)                                    
  .withHeaders(() -> {                                                  
    HttpHeaders headers = new HttpHeaders();
    headers.add("currentTime", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
    return headers;
  })
  . // ... other options
  .build();

```

RestHighLevelClient

```java

@Configuration
public class RestClientConfig extends AbstractElasticsearchConfiguration {
    @Override
    @Bean
    public RestHighLevelClient elasticsearchClient() {

        final ClientConfiguration clientConfiguration = ClientConfiguration.builder()  
            .connectedTo("localhost:9200")
            .build();

        return RestClients.create(clientConfiguration).rest();                         
    }
}

```

#### 自动配置：AuthConfiguration

RestHighLevelClient + Sniffer

```java
ElasticsearchRestClientProperties + PropertiesCredentialsProvider -> RestClientBuilderCustomizer
RestClientBuilderCustomizer -> RestClientBuilder -> RestHighLevelClient
RestHighLevelClient -> LowLevelClient -> Sniffer

```

