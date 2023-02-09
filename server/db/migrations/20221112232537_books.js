/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.integer('author_id').references('authors.id')
    table.integer('status_id').references('status.id').defaultTo(1)
    table.integer('year_pub')
    table.datetime('date_added').defaultTo(knex.fn.now())
    table.unique(['title', 'author_id'])
    table.string('cover_img').defaultTo('default.png')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('books')
}
