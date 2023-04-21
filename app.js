//Imports
const express = require('express')
const blogRoutes = require('./app/routes/blog')
const commentRoutes = require('./app/routes/comment')
const categoryRoutes = require('./app/routes/category')
const tagRoutes = require('./app/routes/tag')
const userRoutes = require('./app/routes/user')

require('dotenv').config();

//connecting database
require('./app/database/connect')


const app = express()
const port = 3000

//Basic use
app.use(express.json())

//Routes
app.use(blogRoutes)
app.use(commentRoutes)
app.use(categoryRoutes)
app.use(tagRoutes)
app.use(userRoutes)


app.listen(port, () => {
    console.log(`Server is running on port ${port} 🚀`)
})

