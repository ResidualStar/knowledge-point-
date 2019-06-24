// module.exports = {
//     entry: './src/js/main.js', // 要打包的路径 
//     output: { // 打包至的路径加目录 path+filename
//         path: __dirname,
//         filename: './dist/bundle.js'

//     }
// }

let path = require('path')

let htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = { // webpack4后默认打包文件为src下面的index.js 可不用配置路径
    // mode:'development/production'  开发模式/压缩
    entry: path.join(__dirname, './src/js/main.js'), // 要打包的路径 
    output: { // 打包至的路径加目录 path+filename 
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'

    },
    // devServer{  参数的第二种写法  还要导入webpack包  还要差分package.js中的dev
    // open: true
    // port:3000 
    // contentBase:'src'
    // hot:true
    // }
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
        new htmlWebpackPlugin({ // 创建一个在内存中生成html的插件实例 
            template: path.join(__dirname, './src/index.html'), // 指定模板页面 
            filename: 'index.html' // 指定生成页面的名称 
        }), // 新创建的内存页面 会自己自动追加一个/bundle.js的引用 
        // 若该名字与contentBase要打开的html页面相同 则打开内存中的 
        new VueLoaderPlugin()
    ],
    module: { // 配置所有第三方模块的加载器 
        rules: [ // 匹配规则 
                { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 配置处理css
                // use中 将正则获取的结果交给use从右到左依次处理 最后交于webpack打包
                // { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 配置处理less
                // { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理scss
                { test: /\.(jpg|png|gif|bmp|jpeg|svg)$/, use: 'url-loader?limit=11011&name=[name].[ext]' },
                // 配置处理样式中的 ulr地址 ?limit='图片大小字节' <图片大小进行base64编码 >=不会但是名字会变 
                //  ?limit='图片大小字节'&name=[name].[ext] 不会更改名称 
                { test: /\.(ttf|woff|woff2|svg|eot)$/, use: 'url-loader' }, // 处理字体文件 url 
                { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 解决ES6语法  
                { test: /\.vue$/, use: 'vue-loader' } // 处理.vue文件 
            ] // webpack 1.x 可以省略-loader loader?进行传参 格式与url地址一样 
    },
    resolve: { // 修改vue导入时 调用的路径 
        alias: {
            // "vue$": "vue/dist/vue.js" // 当import引入文件 文件名以vue结尾时 寻找该路径包 
            "@": path.join(__dirname, './src')
        }
    }
}