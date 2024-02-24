import { useLazyQuery } from "@apollo/client"
import { getBookQuery } from "../queries/queries"
import { useEffect } from "react"
import { Resources } from "../Resources"

// eslint-disable-next-line react/prop-types
export const BookDetails = ({ bookId }) => {
    console.log(bookId)

    const [loadDetails, { loading, error, data }] = useLazyQuery(getBookQuery);

    useEffect(() => {
        if (bookId) {
            loadDetails({
                variables: { id: bookId },
            })
        }
    }, [bookId, loadDetails])


    return (
        <div id="book-details">
            {
            error ?
                 <p>Error! {error}</p>
            : !bookId ?
                 <p>{Resources.SeeDetailsLabel}</p>
            : loading ?
                 <p>{Resources.LoadingBookDetails}</p>
            : data===undefined ?
                <p>Data Not Loaded</p>
            : <>
                <h2><u>{Resources.BookDetailsHeading}</u></h2>

                <h2>{data.book.name}</h2>
                <p>Genre : <b>{data.book.genre}</b></p>
                <p>Author: <b>{data.book.author.name}</b></p>
                <p>All books by {data.book.author.name}</p>
                {
                    data.book.author.books.map(item => (
                        <li key={item.id}>{item.name} - {item.genre}</li>
                    ))
                }
            </>
            }
            
        </div>
    )
}