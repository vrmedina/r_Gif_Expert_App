import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball', 'Samurai X', 'One Piece'])

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return
    setCategories( [newCategory, ...categories] )
  }

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Search */}
      <AddCategory onAddCategory={ onAddCategory } />

      {/* List */}
      <ol>
        { categories.map((category) => <li key={category}>{category}</li>) }
      </ol>
    </>
  )
}
