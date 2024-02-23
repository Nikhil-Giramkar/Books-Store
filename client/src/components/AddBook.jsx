import { useState } from "react"
import { AuthorsList } from "./AuthorsList"

export const AddBook = () => {

    const [book, setBook] = useState({
        name: "",
        genre: "",
        authorId: ""
    })

    const handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        
        setBook({
            ...book,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(book);
    }

    return (
        <>
            <form id="add-book" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Book Name: </label>
                    <input type="text" name="name" id="name" onChange={handleOnChange} value={book.name} />
                </div>

                <div className="field">
                    <label htmlFor="genre">Genre: </label>
                    <input type="text" name="genre" id="genre" onChange={handleOnChange} value={book.genre}/>
                </div>

                <div className="field">
                    <label htmlFor="author">Author: </label>
                    <select name="authorId" onChange={handleOnChange}>
                        <option>Select Author</option>
                        <AuthorsList />
                    </select>
                </div>

                <button>+</button>
            </form>
        </>
    )
}