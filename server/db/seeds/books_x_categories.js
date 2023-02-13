/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books_x_categories').del()
  await knex('books_x_categories').insert([
    { book_id: 1, category_id: '1' },
    { book_id: 1, category_id: '5' },
    { book_id: 2, category_id: '1' },
    { book_id: 3, category_id: '1' },
    { book_id: 4, category_id: '1' },
    { book_id: 5, category_id: '1' },
    { book_id: 6, category_id: '1' },
  ])
}
