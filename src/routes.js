const {getAllBook, getBookById} = require('./handlerGET')
const {postBook} = require('./handlerPOST')
const {deleteBook} = require('./handlerDELETE')
const {putBook} = require('./handlerPUT')

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBook
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById
  },
  {
    method: 'POST',
    path: '/books',
    handler: postBook
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: putBook
  }
]

module.exports = routes;