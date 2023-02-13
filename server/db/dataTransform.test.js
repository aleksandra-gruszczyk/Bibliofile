const { mapAllCategories } = require('./dataTransform')

const dbOutput = [
  { book_id: 1, category: 'fiction' },
  { book_id: 1, category: 'mythology' },
  { book_id: 2, category: 'fiction' },
  { book_id: 3, category: 'fiction' },
  { book_id: 4, category: 'mythology' },
]

const desiredOutput = [
  { book_id: 1, categories: ['fiction', 'mythology'] },
  { book_id: 2, categories: ['fiction'] },
  { book_id: 3, categories: ['fiction'] },
  { book_id: 4, categories: ['mythology'] },
]

describe('mapAllCategories', () => {
  it('returns books from db', () => {
    let transform = mapAllCategories(dbOutput)
    expect(transform).toEqual(desiredOutput)
  })
})
