const express = require('express');
var methodOverride = require('method-override')
//midleware
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
// gán route bằng import routes
const route = require('./routes');
const db = require('./config/db');
const port = 3000;
var morgan = require('morgan');
const handlebars = require('express-handlebars');
app.use(express.static(path.join(__dirname, 'public')));
// doi voi file tĩnh thì nó sẽ kiem tra như này
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// phải thêm middle ware vào thì mới sửa được lỗi k lấy đưuọc json
db.connect();
//overide lại method trong form
app.use(methodOverride('_method'))
// Route init
route(app);

//template engine

app.engine(
  'hbs',
  handlebars.engine({
    helpers: {
      sum : (a,b) => a + b
   },
   extname: 'hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});
// bai benh vien phai dung node 6.14.13
// nodejs nay ban moi nhat
// nếu mà làm như docs mà không được thì phải xem lại require hay import , cno khác nhau