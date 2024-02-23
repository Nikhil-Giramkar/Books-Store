import { gql, useQuery } from "@apollo/client"

const getBooksQuery = gql`
{
    books{
        name
        genre
        id
    }
}
`

export const BookList = () => {

    const {loading, error, data} = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    //Lets see what we get
    console.log(data)
    return (
        <>
            <div>
                <ul id="book-list">
                    <li>Book Name</li>
                </ul>
            </div>
        </>
    )
}