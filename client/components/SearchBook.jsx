import React, { useState, useEffect } from 'react'
import { searchBook } from '../apiClient'

export default function SearchBook() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchedBook, setSearchedBook] = useState(null)
  const [input, setInput] = useState(null)
  const [searchTerm, setSearchTerm] = useState('The Black Company')

  useEffect(() => {
    setIsLoading(true)
    searchBook(searchTerm)
      .then((response) => {
        setSearchedBook(response.body)
      })
      .finally(() => {
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [searchTerm])

  function handleChange(evt) {
    setInput(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    setSearchTerm(input)
  }

  if (isLoading) return 'Loading...'

  return (
    <>
      <section>
        <h1>Find your book!</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="input" id="input" onChange={handleChange} />
          <button type="submit">Search</button>
        </form>

        <h3>Title: {searchedBook.title}</h3>
        <h3>Author`&apos`s First Name: {searchedBook.author}</h3>
        <h3>Author`&apos`s Last Name: {searchedBook.author}</h3>
        <h3>Year of Publication: {searchedBook.year_pub}</h3>

        {/* {isLoading ? <>LOADING!</> : <>List Pokemons</>} */}
      </section>
    </>
  )
}
