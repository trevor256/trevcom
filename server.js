const express = require('express');
const mongoose = require('mongoose');
const postsRouter = require('./routes/posts')
const app = express()

mongoose.connect('mongodb://localhost/')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

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

    },
    {
      title: 'test post3',
      createdAt: new Date(),
      description: 'test desc'
    }]
  res.render('posts/index', { post: post})
})


app.use('/posts', postsRouter)

app.listen(8080)
