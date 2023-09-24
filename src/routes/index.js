const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app){
    app.use('/',siteRouter)
      app.use('/news',newsRouter)// có nhưng trang con thì mới để tách không thì cứ để chúng trong một file site
}
module.exports = route
// cái file này để điều hướng cho http có thể lấy địa chỉ của trang ở đâu
// như ở trên là nó chọc vào file news và file controller để lấy địa chỉ