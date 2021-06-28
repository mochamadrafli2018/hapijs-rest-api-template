const {nanoid} = require('nanoid');
const books = require('./books');
 
const postBook = (request, h) => {
  // request payload untuk mengambil data yang dikirimkan melalui HTTP
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading
  } = request.payload;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = false
  const newBook = {
    id,
    name, 
    year, 
    author, 
    summary, 
    publisher, 
    pageCount, 
    readPage, 
    finished,
    reading, 
    insertedAt, 
    updatedAt
  };
  // check name property
  if (newBook.name === undefined) {
    const response = h.response(
        {
          'status': 'fail',
          'message': 'Gagal menambahkan buku. Mohon isi nama buku'
        }
    )
    response.code(400)
    return response
  }
  // check readPage > pageCount
  if (newBook.readPage > newBook.pageCount) {
    const response = h.response(
        {
          'status': 'fail',
          'message': 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        }
    )
    response.code(400)
    return response
  }
  // assigned finished is false
  if (newBook.readPage < newBook.pageCount) {
    newBook.finished = false
  }
  // assigned finished is true
  if (newBook.readPage == newBook.pageCount) {
    newBook.finished = true
  }
  // push in array
  books.push(newBook);
  // if success push newBook
  const isSuccess = books.filter((i) => i.id === id).length > 0;
  if (isSuccess) {
    const response = h.response(
        {
          status: 'success',
          message: 'Buku berhasil ditambahkan',
          data: {
            bookId: id
          }
        }
    );
    response.code(201);
    return response;
  }
  // generic error
  const response = h.response(
      {
        error: 'error',
        message: 'Buku gagal ditambahkan',
      }
  );
  response.code(500); 
  return response;
}
module.exports = {postBook}
