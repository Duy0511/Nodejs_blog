const express = require('express')
const path = require('path')
const app = express()
// gán route bằng import routes
const route = require('./routes')

const port = 3000
var morgan = require('morgan')
const handlebars = require("express-handlebars");
app.use(express.static(path.join(__dirname, 'public')))
// doi voi file tĩnh thì nó sẽ kiem tra như này
app.use(morgan('combined'))


// Route init
route(app)


//template engine
app.engine('hbs', handlebars.engine({// doi handlebars thanh hbs
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// bai benh vien phai dung node 6.14.13
// nodejs nay ban moi nhat 