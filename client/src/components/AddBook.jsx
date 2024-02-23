import { AuthorsList } from "./AuthorsList"

export const AddBook = () => {

    return (
        <>
            <form id="add-book">
                <div className="field">
                    <label htmlFor="bookName">Book Name: </label>
                    <input type="text" name="bookName" id="bookName" />
                </div>

                <div className="field">
                    <label htmlFor="genre">Genre: </label>
                    <input type="text" name="genre" id="genre" />
                </div>

                <div className="field">
                    <label htmlFor="author">Author: </label>
                    <select>
                        <option>Select Author</option>
                        <AuthorsList />
                    </select>
                </div>

                <button>+</button>
            </form>
        </>
    )
}