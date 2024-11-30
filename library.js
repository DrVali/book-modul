export const books = [];
let id=0;
// console.log(books);

export function addBook(book) {
  id++;
  books.push(book,id);
 
  console.log(id);
  
}

export function listBooks() {
  return books;
}
