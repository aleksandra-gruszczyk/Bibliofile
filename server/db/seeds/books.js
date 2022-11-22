/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    { title: 'Night Watch', author_id: 1, status_id: 3, year_pub: 2002 },
    { title: 'Small Gods', author_id: 1, status_id: 3, year_pub: 1992 },
    {
      title: "Assassin's Apprentice",
      author_id: 2,
      status_id: 3,
      year_pub: 1995,
    },
    { title: 'The Technician', author_id: 3, status_id: 3, year_pub: 2010 },
    { title: 'The Black Company', author_id: 4, status_id: 3, year_pub: 1984 },
  ])
}
