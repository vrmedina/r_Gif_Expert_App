import { useState } from 'react'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball', 'Samurai X', 'One Piece'])

  const onAddCategory = () => {
    setCategories(['HunterXHunter', ...categories])
  }

  console.log(categories)

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Search */}
      <button onClick={onAddCategory}>Add Category</button>

      {/* List */}
      <ol>
        { categories.map((category) => <li key={category}>{category}</li>) }
      </ol>
    </>
  )
}
