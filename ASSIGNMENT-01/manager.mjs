import{books} from './book.mjs';
console.log(books);

const booksOfhigherRating = () =>{
   return books.filter( b=> b.rating> 4.5)

}


const booksRATING = booksOfhigherRating()
console.log(booksRATING)


// function 2.

const printBookDetails = () => {
    books.forEach(({ title, author, rating, genre }) => {
        console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
    });
};
printBookDetails();


// FIction books

const fictionBooks = books.filter(book => book.genre === "fiction")
console.log("Fiction Books:", fictionBooks);


// display an array of book author

const bookAuthors = books.map(book => book.author);
console.log("Authors:", bookAuthors);






