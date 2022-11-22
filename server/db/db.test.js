const { getAllBooks, addBook } = require('./db')

const knex = require('knex')
const config = require('./knexfile')
const testDb = knex(config.test)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('getAllBooks', () => {
  it('returns books from db', () => {
    return getAllBooks(testDb).then((books) => {
      expect(books).toHaveLength(5)
    })
  })
})

// function addBook(title, authorId, year) {
//   return testDb('books').insert({
//     title: 'Reaper Man',
//     author_id: 1,
//     year_pub: 1991,
//   })
// }
describe('addBook', () => {
  it('returns id of the new book and adds a book record to db', () => {
    return addBook('Reaper Man', 1, 1991, testDb).then((res) => {
      expect(res[0]).toBeGreaterThan(0)
      //return getAllBooks(testDb)
    })
    // .then((books) => {
    //   expect(books[10].title).toBe('Reaper Man')
    // })
  })
})

// .then((res) => {
//   expect(res[0]).toEqual(3)
//   return selectPets(testDb)
// })
// .then((pets) => {
//   expect(pets).toHaveLength(3)
//   expect(pets[2].name).toEqual('fluffy')
// })
