import { BookList } from "./components/BookList"
import { Resources } from "./Resources"

function App() {

  return (
    <>
      <div id="main">
        <h1>{Resources.AppHeading}</h1>
        <BookList />
      </div>
    </>
  )
}

export default App
