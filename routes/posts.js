const express = require('express');
const router = express.Router()

router.get('posts/new', (req, res) => {
  res.send('posts/new')
})

router.post('/', (req, res) => {

})

module.exports = router
