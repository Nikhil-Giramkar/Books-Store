import { gql, useQuery } from "@apollo/client"


const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}
`

export const AuthorsList = () => {
    const { loading, error, data } = useQuery(getAuthorsQuery);
        if (error) return <p>Error : {error.message}</p>;

        if (loading) {
            return <option disabled>Loading Authors...</option>;
        }
        else{
            return data.authors.map(author => (
                <option key={author.id} value={author.id}>{author.name}</option>
            ))
        }
}