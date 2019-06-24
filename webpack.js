// 安装webpack  默认只能处理js文件 
// npm i webpack -g 全局环境安装  npm i webpack-cli -g 两个皆需要安装 全部安装后 全局可使用 webpack命令 

// 1.
// 需要自己配置 webpack.config.js文件 

// 直接输入webpack node_modules文件中就会自己增加一个 .cache文件夹 可能全局安装webpack在当前项目文件中增加的打包文件 

// 每次更改文件都需要重新打包一次 文件会自己覆盖上一次文件 



// 2.
// 在项目文件根目录直接输入 webpack 要打包的文件路径(相对于项目根目录) 打包完后存放的文件目录路径(相当与项目根目录 存放目录后加新文件的名字) 



// 代码监听 自动打包
// 安装 webpack-dev-server          npm i webpack-dev-server -D 

// 由于安装的是本地文件 只有安装的全局才能在终端使用 所以去package.json中配置文件 scripts中增加"dev": "webpack-dev-server"
// 还需要在本地安装webpack和webpack-cli npm i webpack -D  npm i webpack-cli -D

// 使用 命令行 npm run dev

// webpack-dev-server 注意点 
// 1. 文件改动 webpack-dev-server会自动监听 并且打包 但是打包的文件的路径并不会根据webpack.config.js文件设置路径进行储存
// 因为不会读取自己写的webpack.config.js文件  所以不会自动更新bundle.js文件 手动输入webpack才会更新

// 2. webpack-dev-server打包生产的文件会挂载至 项目文件根目录中 8080端口打开的就是项目文件根目录 直接/文件名即可访问

// webpack-dev-server参数
// 在 package 配置项 scripts 中 "dev": "webpack-dev-server" 后添加参数
// --open 开启监听后自动打开浏览器
// --port 更改开启的端口号 默认8080
// --contentBase src  打开页面
// --hot  热重载 以补丁的形式局部更新代码 页面不刷新的情况下 更新 相当于异步请求 默认全局刷新

// 页面放入内存中
// 安装 npm i html-webpack-plugin -D   页面生成html的插件
// 在webpack.config.js中导入插件包 只要是插件包 就要放至plugins中

// webpack打包css文件
// 安装 npm i style-loader css-loader -D
// 在webpack.config.js新增配置的节点 module 中的 rules 中添加匹配规则 

// webpack打包less文件
// 安装 npm i less-loader less -D cnpm node-sass -D 
// 在webpack.config.js新增配置的节点 module 中的 rules 中添加匹配规则 

// webpack打包scss文件
// 安装 npm i sass-loader -D
// 在webpack.config.js新增配置的节点 module 中的 rules 中添加匹配规则 

// webpack 处理不了样式内的 url地址
// 安装 npm i url-loader file-loader -D
// 在webpack.config.js新增配置的节点 module 中的 rules 中添加匹配规则  图片文件根目录中

// webpack只能处理一部分ES6语法 
// 解决方法  babel 可以转换 安装两套包 可以得到babel功能 
// 第一套 npm i babel-core babel-loader@7.1.5 babel-plugin-transform-runtime -D   loader只能比core高一个版本 
// 第二套 npm i babel-preset-env babel-preset-stage-0 -D 
// 在webpack.config.js新增配置的节点 module 中的 rules 中添加匹配规则 {test:/\.js$/,use:'babel-loader',exclude:/node_modules/} exclude排除
// 在项目文件根目录 新建 .babelrc 的babel配置文件 文件为JSON格式(不能写注释)
// .babelrc在文件中写配置   
// {
//     "presets":["env","stage-0"],
//     "plugins":["transform-runtime"]
// }

// webpack 处理.vue 后缀名组件
// 安装 npm i vue-loader vue-template-compiler -D 
// webpack.config.js配置文件中增加 { test:/\.vue$/, use: 'vue-loader }
// Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的

// 安装路由模块
// npm i vue-router -s
// 使用 导入路由模板 将模块挂载至vue上  Vue.use()   如果是直接引入文件路径则会自动挂载至Vue上  路由构造函数 实例需要挂载至Vue实例上