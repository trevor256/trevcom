const express = require('express');
const postsRouter = require('./routes/posts')
const app = express()

app.set('view engine', 'ejs')
app.use('/post', postsRouter)


app.get('/', (req, res) => {
    const post = [{
      title: 'test post',
      createdAt: new Date(),
      description: 'test desc'
    },
    {
      title: 'test post2',
      createdAt: new Date(),
      description: 'test desc'

    }]
  res.render('posts/index', { post: post})
})
app.listen(8080)
