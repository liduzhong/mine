const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    pages: {
        index: {
            entry: 'example/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('example'),
            },
        },
    },
}