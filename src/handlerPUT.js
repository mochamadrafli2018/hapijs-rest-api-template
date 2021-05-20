const books = require('./books');

const putBook = (request, h) => {
  let {id} = request.params;
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
  const newBookData = {
    name, 
    year, 
    author, 
    summary, 
    publisher, 
    pageCount, 
    readPage, 
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

  // check index is exist
  const index = books.findIndex((book) => book.id === id);
  id = index
  if (id !== -1) {
    books[id] = {
      ...id, 
      name, 
      year, 
      author, 
      summary, 
      publisher, 
      pageCount, 
      readPage,
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
    message: 'Gagal memperbarui catatan. Id tidak ditemukan',
  });
  response.code(404);
  return response;
}

module.exports = {putBook}
