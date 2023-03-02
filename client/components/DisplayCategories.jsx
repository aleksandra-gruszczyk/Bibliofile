import React from 'react'

export default function DisplayCategories({ categoryList }) {
  return (
    <>
      <ul className="categoryList">
        {categoryList.map((category, i) => (
          <li key={i}>{category}</li>
        ))}
      </ul>
    </>
  )
}
