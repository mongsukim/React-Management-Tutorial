const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req,res) => {
    res.send([
            {
            'id':1,
            'image':'https://placeimg.com/64/64/any',
            'name':'홍길동',
            'birthday':'961222',
            'gender':'남자',
            'job':'학생'
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/1',
            'name':'야옹',
            'birthday':'981002',
            'gender':'남자',
            'job':'학생'
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/2',
            'name':'모찌',
            'birthday':'930408',
            'gender':'여자',
            'job':'직장인'
          }
    ]);
});

app.listen(port,()  => console.log(`listening on port ${port}`));