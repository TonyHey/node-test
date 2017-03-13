const developmentAssets = './';

module.exports = {
    browserSync: {
        proxy: 'localhost:8888',
        // server: {
        // baseDir: ["../"]
        // },
        port: 8889,
        files: [
            developmentAssets + 'index.js',
            developmentAssets + 'src/*.js'
        ]
    }
};