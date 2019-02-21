if (process.env.NODE_ENV == 'production') {
  module.exports = { mongoURI: 'mongodb://liliane:123456l@ds147125.mlab.com:47125/sis-patrimonio-prod' }
} else {
  module.exports = { mongoURI: 'mongodb://localhost/patrimonio' }
}
