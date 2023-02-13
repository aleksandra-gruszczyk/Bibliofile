/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    {
      title: 'Night Watch',
      author_id: 1,
      status_id: 3,
      date_read: '2022-12-01',
      cover_img: '1.png',
      rating: 5,
    },
    {
      title: 'Small Gods',
      author_id: 1,
      status_id: 3,
      date_read: '1995-06-12',
      cover_img: '2.png',
      rating: 5,
    },
    {
      title: "Assassin's Apprentice",
      author_id: 2,
      status_id: 3,
      date_read: '2007-09-21',
      cover_img: '3.png',
      rating: 4.5,
    },
    {
      title: 'The Technician',
      author_id: 3,
      status_id: 3,
      date_read: '2021-02-01',
      cover_img: '4.png',
      rating: 5,
    },
    {
      title: 'The Black Company',
      author_id: 4,
      status_id: 3,
      date_read: '2018-03-23',
      cover_img: '5.png',
      rating: 5,
    },
    {
      title: 'Jujutsu Kaisen #1',
      author_id: 5,
      status_id: 3,
      date_read: '2023-01-02',
      cover_img: '6_1676334867751.png',
      rating: 3.5,
    },
  ])
}
