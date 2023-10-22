
## 220927




https://cloud.tencent.com/developer/article/1943055

https://github.com/elastic/elasticsearch/issues/65213


https://docs.spring.io/spring-data/elasticsearch/docs/current-SNAPSHOT/reference/html/#elasticsearch.clients.configuration

ClientConfiguration configuration = ClientConfiguration.builder()
        .connectedTo(ports)
        .withConnectTimeout(15000)
        .withClientConfigurer(
                RestClients.RestClientConfigurationCallback.from(httpAsyncClientBuilder -> {
                    httpAsyncClientBuilder.setDefaultIOReactorConfig(IOReactorConfig.custom()
                            .setSoKeepAlive(true)
                            .build());
                    return httpAsyncClientBuilder;
                }))
        .withSocketTimeout(15000)
        .withBasicAuth(name, pass)
        .build();


https://blog.csdn.net/qq_21383435/article/details/118072517
https://www.lmlphp.com/user/151164/article/item/2983943/

