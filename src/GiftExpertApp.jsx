import { useState } from "react"
import {AddCategory, GifGrid} from './components'

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory.toUpperCase())) return 
    setCategories([newCategory.toUpperCase(),...categories])

  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory
        onNewcategory={onAddCategory}
      />
      <ol>
        { categories.map( category => ( <li key={category}><GifGrid category={category} /></li> )) }
      </ol> 
    </>
  ) 
}
