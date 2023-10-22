# JDK性能分析

## JDK自带工具

- appletviewer: 用于运行并浏览applet小程序。
- extcheck: 扩展检测工具，主要用于检测指定jar文件与当前已安装的Java SDK扩展之间是否存在版本冲突。
- idlj: IDL转Java编译器(IDL-to-Java Compiler)，用于为指定的IDL文件生成Java绑定。IDL意即接口定义语言(Interface Definition Language)。
- jar: jar文件管理工具，主要用于打包压缩、解压jar文件。
- jarsigner: jar密匙签名工具。
- java: Java运行工具，用于运行.class字节码文件或.jar文件。
- javac: Java编译工具(Java Compiler)，用于编译Java源代码文件。
- javadoc: Java文档工具，主要用于根据Java源代码中的注释信息生成HTML格式的API帮助文档。
- javafxpackager: JavaFX包装器，用于执行与封装或签名JavaFX应用有关的任务。JDK 8u20已经迁移此工具到javapackager。
- javah: Java头文件工具，用于根据Java类生成C/C++头文件和源文件(主要用于JNI开发领域)。
- javap: Java反编译工具，主要用于根据Java字节码文件反汇编为Java源代码文件。
- javapackager: 执行针对Java应用程序和JavaFX应用程序的打包和签名的任务。包含了javafxpackager的功能。
- jcmd: Java 命令行(Java Command)，用于向正在运行的JVM发送诊断命令请求。
- jconsole: 图形化用户界面的监测工具，主要用于监测并显示运行于Java平台上的应用程序的性能和资源占用等信息。
- jdeps: 用于分析Java class的依赖关系.
- jdb: Java调试工具(Java Debugger)，主要用于对Java应用进行断点调试。
- jhat: Java堆分析工具(Java Heap Analysis Tool)，用于分析Java堆内存中的对象信息。
- jinfo: Java配置信息工具(Java Configuration Information)，用于打印指定Java进程、核心文件或远程调试服务器的配置信息。
- jjs: 对Nashorn引擎的调用。Nashorn是基于Java实现一个轻量级高性能的JavaScript运行环境。
- jmap: Java内存映射工具(Java Memory Map)，主要用于打印指定Java进程、核心文件或远程调试服务器的共享对象内存映射或堆内存细节。
- jmc: Java任务控制工具(Java Mission Control)，主要用于HotSpot JVM的生产时间监测、分析、诊断。开发者可以使用jmc命令来创建JMC工具。 https://docs.oracle.com/javacomponents/jmc-5-5/- jmc-user-guide/toc.htm
- jps: JVM进程状态工具(JVM Process Status Tool)，用于显示目标系统上的HotSpot JVM的Java进程信息。
- jrunscript: Java命令行脚本外壳工具(command line script shell)，主要用于解释执行javascript、groovy、ruby等脚本语言。
- jsadebugd: Java可用性代理调试守护进程(Java Serviceability Agent Debug Daemon)，主要用于附加到指定的Java进程、核心文件，或充当一个调试服务器。
- jstack: Java堆栈跟踪工具，主要用于打印指定Java进程、核心文件或远程调试服务器的Java线程的堆栈跟踪信息。
- 
- jstat: JVM统计监测工具(JVM Statistics Monitoring Tool)，主要用于监测并显示JVM的性能统计信息，包括gc统计信息。
- jstatd: jstatd(VM jstatd Daemon)工具是一个RMI服务器应用，用于监测HotSpot JVM的创建和终止，并提供一个接口，允许远程监测工具附加到运行于本地主机的JVM上。
- jvisualvm: JVM监测、故障排除、分析工具，主要以图形化界面的方式提供运行于指定虚拟机的Java应用程序的详细信息。
- keytool: 密钥和证书管理工具，主要用于密钥和证书的创建、修改、删除等。主要用于获取或缓存Kerberos协议的票据授权票据。允许用户查看本地凭据缓存和密钥表中的条目(用于Kerberos协议)。Kerberos密- 钥表管理工具，允许用户管理存储于本地密钥表中的主要名称和服务密钥。
- native2ascii: 本地编码到ASCII编码的转换器(Native-to-ASCII Converter)，用于”任意受支持的字符编码”和与之对应的”ASCII编码和(或)Unicode转义”之间的相互转换。
- orbd: 对象请求代理守护进程(Object Request Broker Daemon)，它使客户端能够透明地定位和调用位于CORBA环境的服务器上的持久对象。
- pack200: JAR文件打包压缩工具，它可以利用Java类特有的结构，对普通JAR文件进行高效压缩，以便于能够更快地进行网络传输。这是微软提供的对象包装程序，用于对象安装包。
- policytool: 策略工具，用于管理用户策略文件(.java.policy)。
- rmic: Java RMI 编译器，为使用JRMP或IIOP协议的远程对象生成stub、skeleton、和tie类，也用于生成OMG IDL。
- rmid: Java RMI 激活系统守护进程，rmid启动激活系统守护进程，允许在虚拟机中注册或激活对象。
- rmiregistry: Java 远程对象注册表，用于在当前主机的指定端口上创建并启动一个远程对象注册表。
- schemagen: XML schema生成器，用于生成XML schema文件。
- serialver: 序列版本命令，用于生成并返回serialVersionUID。
- servertool: Java IDL 服务器工具，用于注册、取消注册、启动和终止持久化的服务器。
- tnameserv: Java IDL瞬时命名服务。
- unpack200: JAR文件解压工具，将一个由pack200打包的文件解压提取为JAR文件。
- wsgen: XML Web Service 2.0的Java API，生成用于JAX-WS Web Service的JAX-WS便携式产物。
- wsimport: XML Web Service 2.0的Java API，主要用于根据服务端发布的wsdl文件生成客户端存根及框架
- xjc: 主要用于根据XML schema文件生成对应的Java类。




## JMC

JDK Mission Control is a low-overhead profiling and diagostics tools suite for the JVM.


### OracleJDK1.8自带的JMC
版本：Oracle® Java Mission Control 5.5.0 (M5.5.0-108，165303)
没办法远程连接OpenJDK8
可以连接本地环境

### JMC最新版本（Oracle）

JMC7：http://jdk.java.net/jmc/

### JMC最新版本（openjdk）

https://adoptopenjdk.net/jmc



### OracleJDK和OpenJDK之间的差异

虽然我们已经说过让OpenJDK和OracleJDK二进制文件尽可能彼此接近一致，但至少在JDK 11中，这两个选项之间存在一些差异。

OracleJDK和OpenJDK目前的差异是：
- 1、只有Oracle JDK提供Solaris，只有OpenJDK提供Alpine Linux。
- 2、Oracle JDK提供安装程序（msi，rpm，deb等），它们不仅将JDK二进制文件放在系统中，还包含更新规则，并且在某些情况下处理一些常见配置，例如设置公共环境变量（例如，Windows中的JAVA_HOME）并建- 立文件关联（例如，使用java来启动.jar文件）。OpenJDK仅作为压缩文件（tar.gz或.zip）提供。
- 3、javac --release 9和javac --release 10表现是不同的。Oracle JDK二进制文件包括未添加到OpenJDK二进制文件的API，如javafx，资源管理和（JDK 11之前的更改）JFR API。
- 4、Oracle JDK提供“JDK”和“JRE”。OpenJDK仅提供“JDK”。
- 5、使用日志Usage Logging仅在Oracle JDK中可用。
- 6、如果使用-XX：+ UnlockCommercialFeatures标志，OpenJDK将（继续）出现错误并停止。 Oracle JDK不再需要该选项，如果用了会输出警告信息，但是会继续运行。
- 7、Oracle JDK要求使用Oracle提供的证书对第三方加密提供程序进行签名。OpenJDK将继续允许使用未签名的第三方加密提供程序。
- 8、java -version的输出会有所不同。Oracle JDK会说java并包含LTS。OpenJDK（由Oracle生产）将说OpenJDK，而不包括Oracle特定的LTS标识符。
- 9、Oracle JDK将在OTN许可下发布。任何许可证文件都需要指向OTN。OpenJDK将在GPLv2wCP下发布，并将包含GPL许可。
- 10、Oracle JDK将在FreeType许可下分发FreeType，而OpenJDK将在GPLv2下分发。因此\legal\java.desktop\freetype.md的内容将有所不同。
- 11、Oracle JDK有Java杯和蒸汽图标，OpenJDK有Duke图标。

## JProfiler
JProfiler是由ej-technologies GmbH公司开发的一款性能瓶颈分析工具(该公司还开发部署工具)。
其特点:
- 使用方便
- 界面操作友好
- 对被分析的应用影响小
- CPU,Thread,Memory分析功能尤其强大
- 支持对jdbc,noSql, jsp, servlet, socket等进行分析
- 支持多种模式(离线，在线)的分析
- 跨平台

 



## VisualVM

JDK8自带的工具：/bin/jvisualvm.exe   
JDK8之后被移除   
新版本：http://visualvm.github.io/download.html   



## 5款Java性能分析工具的对比
https://blog.csdn.net/know_world/article/details/83862182
- VisualVM
- JProfiler
- YourKit
- JProbe
- Spring Insight

## VTune

是 Intel 提供的一个强大的应用程序性能分析软件，如何使用只需要看这两篇官方教程。（下载需要注册intel账号）


## JMC、JFR
openjdk 11上已经实现Java Flight Recorder的功能 




## 大数据性能分析案例：

美团Apache Kylin精确去重指标优化历程
https://developer.aliyun.com/article/182803







