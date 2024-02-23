import { useQuery } from "@apollo/client"
import { getBooksQuery } from "../queries/queries";
import { Resources } from "../Resources";
import { BookDetails } from "./BookDetails";
import { useState } from "react";

export const BookList = () => {

    const { loading, error, data } = useQuery(getBooksQuery);

    const [bookSelected, setBookSelected] = useState(null);

    if (error) return <p>Error : {error.message}</p>;

    if (loading) {
        return <p>{Resources.LoadingBooks}</p>;
    }
    else {
        //Lets see what we get
        console.log(data)

        return (

            <div>
                <ul id="book-list">
                    {data.books.map(book => (
                        <li key={book.id} onClick={()=>setBookSelected(book.id)}>
                            <h2>{book.name}</h2>
                        </li>
                    ))}
                </ul>

                <BookDetails bookId={bookSelected}/>
            </div>
        )
    }
}