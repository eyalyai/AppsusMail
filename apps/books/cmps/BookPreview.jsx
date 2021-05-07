

export function BookPreview({book, setSelectedBook}) {

    var currencyCode;

    switch(book.listPrice.currencyCode) {
        case 'USD':
            currencyCode = '$';
        break;
        case 'EUR':
            currencyCode = '€';
        break;
        case 'ILS':
            currencyCode = '₪';
        break;
        }
return (
    <div className="book-preview" onClick={() => {setSelectedBook(book)}}>
            <img src={book.thumbnail} alt="" />
            <div className="preview-details">
            <h3>{book.title}</h3>
            <h4>Price: {+book.listPrice.amount} {currencyCode}</h4>
            </div>
        </div>
    )
}