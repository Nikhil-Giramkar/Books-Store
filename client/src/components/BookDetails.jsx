import { useLazyQuery } from "@apollo/client"
import { getBookQuery } from "../queries/queries"
import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
export const BookDetails = ({bookId}) => {
    console.log(bookId)

    const [loadDetails,{loading, error, data}] = useLazyQuery(getBookQuery);

    useEffect(()=>{
        if(bookId){
            loadDetails({
                variables: {id: bookId},
            })
        }
    }, [bookId])
    
    if(error)
        return <p>Error! {error}</p>
    if(!bookId)
        return <p>Click a Book to see details</p>
    if(loading)
        return <p>Loading Book Details...</p>
    if(data===undefined)
        return <p>Data not fetched</p>
    return (
        <>
        <h1>Book Details Here</h1>
        <div id="book-details">
            <h2>{data.book.name}</h2>
            <p>{data.book.genre}</p>
            <p>{data.book.author.name}</p>
            <p>All books by this Author</p>
            {
                data.book.author.books.map(item=>(
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </div>
        </>
    )
}