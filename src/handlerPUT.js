const books = require('./books');
 
const putBook = (request, h) => {
  // request params untuk mengambil data id yang dikirimkan melalui URL 
  // localhost:5000/books/{id}
  let {id} = request.params;
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
  const updatedAt = new Date().toISOString();
  // memasukkan data di atas ke variabel newBookData
  const finished = false
  const newBookData = {
    name, 
    year, 
    author, 
    summary, 
    publisher, 
    pageCount, 
    readPage, 
    finished,
    reading, 
    updatedAt
  };
  // check name property
  if (newBookData.name === undefined) {
    const response = h.response(
        {
          status: 'fail',
          message: 'Gagal memperbarui buku. Mohon isi nama buku'
        }
    )
    response.code(400)
    return response
  }
  // check readPage > pageCount
  if (newBookData.readPage > newBookData.pageCount) {
    const response = h.response(
        {
          status: 'fail',
          message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
        }
    )
    response.code(400)
    return response
  }
  // assigned finished is false
  if (newBookData.readPage < newBookData.pageCount) {
    newBookData.finished = false
  }
  // assigned finished is true
  if (newBookData.readPage == newBookData.pageCount) {
    newBookData.finished = true
  }
  // check index is exist
  id = books.findIndex((book) => book.id === id);
  if (id !== -1) {
    books[id] = {
      ...books[id], 
      name, 
      year, 
      author, 
      summary, 
      publisher, 
      pageCount, 
      readPage,
      finished,
      reading, 
      updatedAt
    }
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
  
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
}
 
module.exports = {putBook}
