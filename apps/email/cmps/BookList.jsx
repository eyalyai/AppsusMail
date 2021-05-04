import {BookPreview} from "./BookPreview.jsx"

export function BookList({books}) {

        console.log(books)
    return <main className="book-list">
         {books.map((book) => { return  <BookPreview  book={book} key={book.id}/>})}
        </main>
    
}