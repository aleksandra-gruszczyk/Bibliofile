import React from 'react'

//import AddBook from '../../client/components/AddBook'
import Books from './Books'

const App = () => {
  // const [books, setBooks] = useState(' ')

  // function handleAddBook(newBook) {
  //   if (books.includes(newBook)) return
  //   const newBooks = [...books, newBook]
  //   setBooks(newBooks)
  // }

  return (
    <main>
      <h1>{'Your books 📝'}</h1>
      <Books />
      <h2>{'Add new books'}</h2>
      {/* <AddBook onAddBook={handleAddBook} /> */}

      {/* <h2>{'Your list of books'}</h2>
      <Books books={books} /> */}
    </main>
  )

  // const [greeting, setGreeting] = useState('')
  // const [count, setCount] = useState(0)
  // const [isError, setIsError] = useState(false)

  // useEffect(() => {
  //   getGreeting()
  //     .then((greeting) => {
  //       console.log(greeting)
  //       setGreeting(greeting)
  //       setIsError(false)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setIsError(true)
  //     })
  // }, [count])

  // return (
  //   <>
  //     {count}
  //     <h1>{greeting}</h1>
  //     {isError && (
  //       <p style={{ color: 'red' }}>
  //         There was an error retrieving the greeting.
  //       </p>
  //     )}
  //     <button onClick={() => setCount(count + 1)}>Click</button>
  //   </>
  // )
}

export default App
