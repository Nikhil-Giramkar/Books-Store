import {useQuery } from "@apollo/client"
import { getAuthorsQuery } from "../queries/queries";
import { Resources } from "../Resources";

export const AuthorsList = () => {
    const { loading, error, data } = useQuery(getAuthorsQuery);
        if (error) return <p>Error : {error.message}</p>;

        if (loading) {
            return <option disabled>{Resources.LoadingAuthors}</option>;
        }
        else{
            return data.authors.map(author => (
                <option key={author.id} value={author.id}>{author.name}</option>
            ))
        }
}