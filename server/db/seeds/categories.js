/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('categories').del()
  await knex('categories').insert([
    { id: 1, name: 'fiction' },
    { id: 2, name: 'non-fiction' },
    { id: 3, name: 'graphic novels' },
    { id: 4, name: 'manga' },
    { id: 5, name: 'mythology' },
    { id: 6, name: 'fantasy' },
    { id: 7, name: 'science fiction' },
    { id: 8, name: 'horror' },
    { id: 9, name: 'mystery' },
    { id: 10, name: 'thriller' },
    { id: 11, name: 'romance' },
    { id: 12, name: 'comedy' },
    { id: 13, name: 'drama' },
    { id: 14, name: `children's fiction` },
    { id: 15, name: 'classic' },
    { id: 16, name: 'poetry' },
    { id: 17, name: 'action/adventure' },
    { id: 18, name: 'science' },
  ])
}
