const books = require('./books');
// getAllBook
const getAllBook = (request, h) => {
  // request dan h harus selalu ditulis
  // query parameter reading === 1
  const {reading} = request.query;
  const {finished} = request.query;
  // const { name } = request.query;

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
  /*
  if(nama !== undefined){
    if(nama == 'Dicoding') {
    }
  }
  */

  else {
    // getAllBook
    const book = books.map((i) => {
      return {
        'id': i.id,
        'name': i.name,
        'publisher': i.publisher
      }
    });
    if (book !== undefined) {
      const response = h.response({
        status: 'success',
        data: {
          book
        }
      });
      response.code(200);
      return response;
    }
  }
}

// getBookById
const getBookById = (request, h) => {
  // Access : http://localhost:5000/books/aWZBUW3JN_VBE-9I
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
