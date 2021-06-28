let books = require('./books');
 
// getAllBook
const getAllBook = (request, h) => {
  // request dan h harus selalu ditulis
  // query parameter reading
  const {reading} = request.query;
  // query parameter finished
  const {finished} = request.query;
  // const { name } = request.query;
 
  // get all books with reading == true
  if (reading !== undefined) {
    if (reading == 1) {
      const bookAllRead = books.filter((i) => i.reading === true)
      const bookAllReadPrint = bookAllRead.map((i) => {
        return {
          'id': i.id,
          'name': i.name,
          'publisher': i.publisher
        }
      })
      const response = h.response({
        status: 'success',
        data: { 
          bookAllReadPrint 
        }
      });
      response.code(200);
      return response;
    }
    const bookAllRead = books.filter((i) => i.reading === false)
    const bookAllReadPrint = bookAllRead.map((i) => {
      return {
        'id': i.id,
        'name': i.name,
        'publisher': i.publisher
      }
    })
    const response = h.response({
      status: 'success',
      data: { 
        bookAllReadPrint 
      }
    });
    response.code(200);
    return response;
  }
 
  // get all books with finished == true
  if (finished !== undefined) {
    if (finished == 1) {
      const bookAllFinished = books.filter((i) => i.finished === true)
      const bookAllFinishedPrint = bookAllFinished.map((i) => {
        return {
          'id': i.id,
          'name': i.name,
          'publisher': i.publisher
        }
      })
      const response = h.response({
        status: 'success',
        data: { 
          bookAllFinishedPrint 
        }
      });
      response.code(200);
      return response;
    }
    const bookAllFinished = books.filter((i) => i.finished === false)
    const bookAllFinishedPrint = bookAllFinished.map((i) => {
      return {
        'id': i.id,
        'name': i.name,
        'publisher': i.publisher
      }
    })
    const response = h.response({
      status: 'success',
      data: {
        bookAllFinishedPrint 
      }
    });
    response.code(200);
    return response;
  }
 
  // get all books
  else {
    if (books !== undefined) {
      const response = h.response({
        status: 'success',
        data: {
          // mengembalikan data id, name dan publisher
          books : books.map((book) => {
            return {
              'id': book.id,
              'name': book.name,
              'publisher': book.publisher
            }
          })
        } 
      });
      response.code(200);
      return response;
    }
  }
}
 
// getBookById
const getBookById = (request, h) => {
  // request params untuk mengambil data id yang dikirimkan melalui URL
  // localhost:5000/books/{id}
  const {id} = request.params;
  const book = books.filter((n) => n.id === id)[0];
  if (book !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        book
      }
    })
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
}
 
module.exports = {getAllBook, getBookById};
