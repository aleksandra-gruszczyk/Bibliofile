/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('status').del()
  await knex('status').insert([
    { id: 1, name: 'waiting' },
    { id: 2, name: 'reading' },
    { id: 3, name: 'finished' },
    { id: 4, name: 'DNF' },
  ])
}
