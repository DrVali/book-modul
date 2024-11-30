
import { addBook, listBooks } from './library.js';
import formatBook from './formatter.js';




addBook({ title: 'harry potter', author: 'ali ahmadi' });
addBook({ title: ' Dargaz book', author: 'Asghar agha' });
addBook({ title: ' Ghouchan book', author: 'Mr Ali Developer' });

const books = listBooks();
// console.log("B", books);
books.forEach(book => {
    console.log(formatBook(book));
});
