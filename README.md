# generator-fe
前端工程脚手架，基于 `Yeoman` 和 `悠洗前端集成解决方案` 构建，用于：
* 快速生成并初始化标准格式的项目（组）；
* 提供统一的开发规范、构建脚本、基础配置和初始代码；
* 内置前端集成解决方案，快速实现底层通用功能；

## 安装
1. 执行命令 `npm install -g yo`，在本地全局安装 yeoman；
2. 在 gitlab 上 `clone` 项目 `https://github.com/lvpengyue/generator-fe.git`；
3. 在 generator-fe 项目的根路径下执行命令 `npm link`，创建全局链接；

## 基本概念
一个完整的前端工程唯一对应一个项目组，其中包括一个通用项目和若干自定义项目。

#### Group（项目组）
用于定义一组业务逻辑紧密相关的项目，并在开发阶段为其提供统一的项目路径、项目依赖、构建脚本和配置文件。

#### Common Application（通用项目）
用于在项目组范围内为各自定义项目提供通用的组件、配置文件和 dll 文件。

#### Application（自定义项目）
用于定义一个实现具体业务逻辑的项目。

## 文件结构
#### Group
```
├── /apps                # 项目路径
│   ├── /common          # 通用项目
│   ├── /test1           # 自定义项目
├── /configs             # 配置文件
│   ├── /dev.conf.js     # 开发模式构建配置
│   ├── /prod.conf.js    # 生产模式构建配置
├── /docs                # 项目文档
├── /node_modules        # 项目依赖
├── /scripts             # 构建脚本
│   ├── /dev-server      # 开发服务器
│   ├── /tasks           # 构建任务
│   ├── /webpack         # webpack 配置文件
├── .babelrc             # babel 配置
├── .csscomb.json        # csscomb 配置
├── .editorconfig        # editorconfig 配置
├── .eslintignore
├── .eslintrc            # eslint 配置
├── .gitignore
├── .jsbeautifyrc        # js 格式化配置
├── .stylelintrc         # css 格式化配置
├── .yo-rc.json          # yeoman 配置
├── package.json         # 项目组 npm 配置
```

#### Common Application
```
├── /configs             # 配置文件
│   ├── /dll.conf.js     # dll 配置文件
│   ├── /dev.conf.js     # 开发模式构建配置
│   ├── /prod.conf.js    # 生产模式构建配置
├── /dist                # 构建后文件
├── /src                 # 项目代码
    ├── /components      # 组件
        ├── /utils       # 通用组件
        ├── /widgets     # UI 组件
├── /test                # 测试文件
├── package.json         # 项目 npm 配置
```

#### Application
```
├── /configs             # 配置文件
│   ├── /dev.conf.js     # 开发模式构建配置
│   ├── /prod.conf.js    # 生产模式构建配置
├── /dist                # 构建路径
├── /src                 # 项目代码
|   ├── /components      # 组件
|       ├── /utils       # 通用组件
|       ├── /widgets     # UI 组件
|       ├── /views       # 页面组件
|   ├── index.html       # 页面文件
|   ├── index.js         # 项目主入口
├── /test                # 测试文件
├── package.json         # 项目 npm 配置
```

## 命令列表
* `yo fe:group`  
  创建项目组，需在项目组根路径下进行；
* `yo fe`  
  创建项目，需在项目组根路径下进行；
* `npm run clean`  
  清空构建路径，需在通用或自定义项目的根路径下执行；
* `npm run dll:dev`  
  以开发模式构建项目组 dll 文件，需在通用项目的根路径下执行；
* `npm run dll:prod`  
  以生产模式构建项目组 dll 文件，需在通用项目的根路径下执行；
* `npm run serve:dev`  
  以开发模式本地运行项目，需在自定义项目的根路径下执行；
* `npm run serve:prod`  
  以生产模式本地运行项目，需在自定义项目的根路径下执行；
* `npm run build:dev`  
  以开发模式构建项目，需在自定义项目的根路径下执行；
* `npm run build:prod`  
  以生产模式构建项目，需在自定义项目的根路径下执行；

## 相关约定
* 项目组内的各项目必须运行在相同平台；
* 除必要情况外，项目组内的各项目原则上共享依赖；
* 各项目的通用依赖必须构建为 dll 文件形式；
* 各项目按以下类别划分组件：
  * **通用组件**：包含所有通用算法、逻辑、配置和数据组件；
  * **页面组件**：包含所有作为页面容器的组件，需与路由一一对应；
  * **UI 组件**：包含所有样式和交互组件，当作为页面组件的子组件时，必须使用 `${页面组件}-${UI 组件}` 格式命名；
* 自定义项目必须是单页应用，且页面组件原则上应为远程异步组件；
* 各项目中由系统自动生成的组件在命名上统一携带前缀 `$`，以便于与自定义组件进行区分；
