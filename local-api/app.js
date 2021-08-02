const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const { posts } = require('./data.js')

// middleware 적용
app.use(cors());
// 해당 부분이 주소가 들어가는 부분
app.get('/api/posts', (req, res)=> {
    res.json(posts)
})

app.listen(PORT, () => console.log(`server running on ${PORT}`))