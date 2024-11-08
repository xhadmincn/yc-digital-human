# 版本说明

如果您是之前的老版本用户，你就会发现，6.x 版本是没办法从旧版轻松升级的，当然如果非必要，我也不建议你去动已有的项目升级。

## 关于 6.x

6.x 和之前的版本设计风格完全不一样，可以说是一个完全重写的版本，其中最大的变化点是：

### 不再封装业务接口

从 6.x 起 SDK 中不再内置具体业务的接口，仅封装底层基础部分，如认证、授权和 API 客户端。为什么不再封装业务接口，主要有以下几个原因：

##### 二次封装的学习成本
    
从使用者角度，首先需要了解微信的接口，然后再到 SDK 去寻找对应二次封装的新名称和新的用法，为啥会是新的名称呢？因为微信的接口起名太随意，很多名字无法表意或者有歧义，所以在以前的版本中我们精心设计了新的名字来掩盖这个问题，但是起名这件事情，相信写过代码的同学都知道，它是非常困难的，尤其微信这种杂乱的接口系统，越到后面越词穷。所以二次封装，不仅增加了用户的使用学习成本，也同时增加了 SDK 的封装成本。

##### 更新时效性不足 
    
当有新接口，或者接口变化的时候，SDK 很难做到及时的更新，毕竟用爱发电的人也要工作和生活，大部分都需要好久才会有空把它同步更新过来，即使我已经很努力去尽可能做到快速更新，但还是无法满足使用者的诉求。虽然 SDK 在设计之初就已经考虑过这个问题提供了底层直接调用接口地址的能力，但很多人不知道。

### 去容器化设计

从 3.x 起我们重写了整个 SDK 的架构，引入了 [silexphp/Pimple](https://github.com/silexphp/Pimple) 作为服务容器，将各模块装载到服务容器，随取随用，一直沿用到 5.x。

6.x 开始，因为也不需要再二次封装业务接口，容器存在的必要性就不大了。最终去掉了容器这一层，将各个模块类以纯粹的独立类存在，使用依赖注入的模式传入需要的依赖对象，方便有自定义需求或者特殊运行环境的同学使用自己的类做替换和更方便的生命周期管理。为了方便大部分自定义需求少的使用者场景，在各生态模块外层，提供了工厂类以便于最小成本的完成开发对接。

### 几乎 100% 的自定义能力支持

在继续保持开箱即用的能力下，在 6.x 中你几乎可以做到任何模块的替换，每一个模块都以接口形式依赖，所以你可以轻松的替换任何一个你不满意的模块。当然也包括底层的 Http Client。

## 感谢

感谢所有 EasyWeChat 用户的热爱和支持，更要感谢所有的贡献者，因为爱好产生了 EasyWeChat，因为大家的热爱它才成为了今天拥有无数使用者的 EasyWeChat。希望在未来的路上我们能保持初心，一起努力，一起成长。

- [@overtrue](https://github.com/overtrue) 2022/02/25 夜

### 感谢可爱的贡献者们

<a href="https://github.com/w7corp/easywechat/graphs/contributors"><img src="https://opencollective.com/wechat/contributors.svg?width=890" /></a>