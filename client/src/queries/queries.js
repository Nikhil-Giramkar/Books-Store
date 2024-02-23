import { gql } from "@apollo/client"

export const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}
`

export const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`

export const addBookMutation = gql`
mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
        name 
        id
    }
}
`

//Below query will get all books written by the author who wrote this book
export const getBookQuery = gql`
query($id: ID!){
    book(id: $id){
        id
        name
        genre
        author{
            name
            age
            id
            books{
                name
                genre
                id
            }
        }
    }
}
`


