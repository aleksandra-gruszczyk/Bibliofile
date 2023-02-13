/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('books_x_categories', function (table) {
    table.integer('book_id').references('books.id')
    table.integer('category_id').references('categories.id')
    table.unique(['book_id', 'category_id'])
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('books_x_categories')
}
