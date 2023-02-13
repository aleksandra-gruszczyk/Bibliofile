/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('authors').del()
  await knex('authors').insert([
    { id: 1, first_name: 'Terry', last_name: 'Pratchett' },
    { id: 2, first_name: 'Robin', last_name: 'Hobb' },
    { id: 3, first_name: 'Neal', last_name: 'Asher' },
    { id: 4, first_name: 'Glen', last_name: 'Cook' },
    { id: 5, first_name: 'Gege', last_name: 'Akutami' },
  ])
}
