module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "~@/assets/scss/variables.scss";
                    @import "~@/assets/scss/global.scss";
                `
            }
        }
    }
}