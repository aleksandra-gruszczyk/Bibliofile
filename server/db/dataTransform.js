// function OldmapAllCategories(dbOutput) {
//   let result = []
//   let myIds = []

//   dbOutput.forEach((element) => {
//     if (myIds.includes(element.book_id) == false) {
//       myIds.push(element.book_id)
//     }
//   })

//   myIds.forEach((id) => {
//     let categories = []
//     dbOutput
//       .filter((element) => element.book_id == id)
//       .forEach((element) => {
//         categories.push(element.category)
//       })
//     let bookRecord = { book_id: id, categories }
//     result.push(bookRecord)
//   })

//   return result
// }

function mapAllCategories(dbOutput) {
  let result = []

  dbOutput.forEach((element) => {
    let record = result.find((x) => x.book_id == element.book_id)
    if (record == null) {
      result.push({ book_id: element.book_id, categories: [element.category] })
    } else {
      record.categories.push(element.category)
    }
  })

  return result
}

module.exports = {
  mapAllCategories,
}
