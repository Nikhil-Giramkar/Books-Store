import { AddBook } from "./components/AddBook"
import { BookList } from "./components/BookList"
import { Resources } from "./Resources"

function App() {

  return (
    <>
      <div id="main">
        <h1>{Resources.AppHeading}</h1>
        <BookList />
        <AddBook/>
      </div>
    </>
  )
}

export default App
