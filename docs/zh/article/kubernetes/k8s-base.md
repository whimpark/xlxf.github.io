# Kubernetes

Kubernetes是当今最流行的开源容器管理平台，它就是大名鼎鼎的Google Borg的开源版本。Google在2014年推出了Kubernetes 



## 基础概念
- k8s：Kubernetes[kubə‘netis]是自动化容器操作的开源平台
- Kubernetes cluster：Kubernetes 集群，由许多节点组成，至少包含一个工作节点和一个主节点。工作节点托管Pod，主节点管理集群中的工作节点和所有节点的Pod。多个主节点用于为集群提供故障转移和高可用性。
- 控制平面职责：对集群做出全局决策、检测响应集群事件。全局决策比如调度，事件比如，当不满足部署的 replicas 字段时，启动新的pod
- Pod：应用程序组件
- Nodes：普通节点 
- Control Plane：控制面板、控制平面，运行在master内
- Controller：Kubernetes内置一组控制器，运行在 kube-controller-manager（KCM）内，支持自定义控制器，扩展Kubernetes功能。每个控制器都是一个单独的进程，但是为了降低复杂性，它们都被编译到同一个可执行文件，并在一个进程中运行。


## Kubernetes对象

目标性记录：一旦创建对象，Kubernetes 系统将持续工作以确保对象存在   
Kubernetes 集群的期望状态（Desired State）   

每个 Kubernetes 对象包含两个嵌套的对象字段：对象 spec（规约） 和 对象 status（状态）   
- Spec：描述你希望对象所具有的特征，期望状态（Desired State）   
- Status：描述对象的当前状态（Current State），由 Kubernetes系统和组件设置并更新。   

Kubernetes API 约定：   
https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md

### 控制平面组件
Control Plane Components：控制平面组件，一般都运行在主节点上。主节点避免运行其他用户的组件。
### CCM
Cloud Controller Manager：CCM，云控制器管理器是 1.8 的 alpha 特性。在未来发布的版本中，这是将 Kubernetes 与任何其他云集成的最佳方式。cloud-controller-manager 进运行特定于云平台的控制回路。
- 节点控制器（Node Controller）: 用于在节点终止响应后检查云提供商以确定节点是否已被删除
- 路由控制器（Route Controller）: 用于在底层云基础架构中设置路由
- 服务控制器（Service Controller）: 用于创建、更新和删除云提供商负载均衡器
### KCM
- kube-controller-manager：KCM
- 节点控制器（Node Controller）: 负责在节点出现故障时进行通知和响应。
- 副本控制器（Replication Controller）: 负责为系统中的每个副本控制器对象维护正确数量的 Pod。
- 端点控制器（Endpoints Controller）: 填充端点(Endpoints)对象(即加入 Service 与 Pod)。
- 服务帐户和令牌控制器（Service Account & Token Controllers）: 为新的命名空间创建默认帐户和 API 访问令牌

### kube-apiserver
提供 Kubernetes API 服务的组件，是 Kubernetes 控制平面的前端。
### etcd
是兼具一致性和高可用性的键值数据库，保存 Kubernetes 所有集群数据
### kube-scheduler
该组件监视那些新创建的未指定运行节点的 Pod，并选择节点让 Pod 在上面运行。调度决策考虑的因素包括单个 Pod 和 Pod 集合的资源需求、硬件/软件/策略约束、亲和性和反亲和性规范、数据位置、工作负载间的干扰和最后时限。

### 普通节点组件
节点组件在每个节点上运行，维护运行的 Pod 并提供 Kubernetes 运行环境。
#### kubelet
kubelet 接收PodSpecs，确保 PodSpecs 描述的容器处于运行状态且健康。
kubelet 不会管理不是由 Kubernetes 创建的容器
#### kube-proxy
维护节点上的网络规则。这些网络规则允许从集群内部或外部的网络会话与 Pod 进行网络通信。
#### Container Runtime
Kubernetes 支持多个容器运行环境: Docker、 containerd、cri-o、 rktlet 以及任何实现 Kubernetes CRI (容器运行环境接口)。
#### 插件（Addon）
插件使用 Kubernetes 资源（DaemonSet、 Deployment等）实现集群功能
这些插件提供集群级别的功能，插件中命名空间域的资源属于 kube-system 命名空间
#### DNS
集群DNS
## Dashboard
Web界面
### 容器资源监控
将容器的一些常见的时间序列度量值保存到一个集中的数据库中，并提供用于浏览这些数据的界面。
### 集群层面日志
负责将容器的日志数据 保存到一个集中的日志存储中，该存储能够提供搜索和浏览接口。



## 资源模型

资源指的是可以被 pod 或容器“请求”,“分配”,“或消费”的那些东西。例如，CPU，内存，网络带宽   
CPU 总是一个绝对数量，而不是相对数量（比如 40% 的 CPU），比如 0.5 个 CPU。CPU 资源的单位是 millicores，即一个核的 1/1000。在支持的云提供商上，一个核即一个 vCPU。   


用术语“限额”和“请求”来描述资源的规格。
- 请求：一个容器请求的资源数量。如果一个容器超过了它的资源请求，它可能会被压制回到它的请求数。
- 限额：容器能使用的资源上限。当容器尝试超过它的限额时，如果 Kubernetes 决策发现另一个容器需要资源，那么当前容器会被终结掉。一般来说保持所有容器的资源限额之和等于你的集群的整个资源容量才是有意义的（但是实际上对内存等不可压缩资源，这是有点难做到的）。

你应该设置资源请求，
- 使 Kubernetes 能更好得在不同实例间调度容器，以使用尽可能多的潜在容量。   
- 以免当有一个流氓容器的时候，它不会吃光实例上的所有资源，影响该实例上运行的其它应用。

对容器进行资源限额
对命名空间进行资源限额
## 端口
- Port：是k8s集群内部访问service的端口，即通过clusterIP: port可以访问到某个service
- nodePort：是外部访问k8s集群中service的端口，通过nodeIP: nodePort可以从外部访问到某个service。
- targetPort：是pod的端口，从port和nodePort来的流量经过kube-proxy流入到后端pod的targetPort上，最后进入容器。
- containerPort：是pod内部容器的端口，targetPort映射到containerPort。

## Dashboard
### 集群
- Cluster Roles
- Namespaces
- Nodes
- Persistent Volumes
- Service Accounts
- Storage Classes
### 工作量
- Cron Jobs
- Daemon Sets
- Deployments
- Jobs
- Pods
- Replica Sets
- Replication Controllers
- Stateful Sets
### Service
- Ingresses
- Services
### 配置和存储
- Config Maps
- Persistent Volme Claims
### Secrets
- 定义自定义资源


 
## 部署应用

```bash
## registry.cn-hangzhou.aliyuncs.com/xlxwhy/cloudx-mall-node

kubectl create secret docker-registry secret-xlxdata --docker-server= registry: registry.cn-hangzhou.aliyuncs.com --docker-username=xlxdata --docker-password=data1234 --docker-email=xx@qq.com

 
docker  login  registry.cn-hangzhou.aliyuncs.com  --username=hi35449892@aliyun.com

cat ~/.docker/config.json  |base64 -w 0

```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: cloudx-mall-node
  namespace: default
spec:
  containers:
    - name: cloudx-mall-node
      image: registry.cn-hangzhou.aliyuncs.com/xlxwhy/cloudx-mall-node
  imagePullSecrets:
    - name: docker-aliyun-secret

```

 

## 安装部署

网络必须在部署任何应用之前部署好。此外，在网络安装之前 CoreDNS 是不会启用的。 kubeadm 只支持基于容器网络接口（CNI）的网络而且不支持 kubenet 。

kubectl apply

查看日志
>kubectl logs 



 

## Flannel
https://blog.csdn.net/u011394397/article/details/54584819

Flanel Network: 192.168.x.x   
CNI Network（node1）: 192.168.0.x   
CNI Network（node2）: 192.168.1.x   

清除相关的网络设置
>ifconfig cni0 down
>ip link delete cni0

## Kubectl

>kubectl create -f /tmp/ansible/kubernetes/dashboard.yml
>kubectl delete -f /tmp/ansible/kubernetes/dashboard.yml

标签：kubectl kubernetes create param server apiserver certs dashboard out

问题原因是需要创建证书。

解决办法来自GitHub：https://github.com/kubernetes/dashboard/issues/3472


resolved:
- mkdir certs
- openssl req -nodes -newkey rsa:2048 -keyout certs/dashboard.key -out certs/dashboard.csr -subj "/C=/ST=/L=/O=/OU=/CN=kubernetes-dashboard"
- openssl x509 -req -sha256 -days 365 -in certs/dashboard.csr -signkey certs/dashboard.key -out certs/dashboard.crt
- kubectl create secret generic kubernetes-dashboard-certs --from-file=certs -n kube-system
- kubectl create -f kubernetes-dashboard.yaml


