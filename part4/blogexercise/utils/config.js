
// const mongoUrl = 'mongodb://localhost/bloglist'
//const PORT = 3003
require('dotenv').config()


const PORT = process.env.PORT
const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.DEV_MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}

