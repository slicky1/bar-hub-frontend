import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import Category from './Category.js'
import CategoryForm from './CategoryForm.js'

export default function CatergoryContainer() {

    const [categories, setCategories] = useState(null)

    //Read Operation

    useEffect(() => {
        fetch(BASE_URL + 'categories')
         .then(res => res.json())
         .then(json => setCategories(json))
    }, [])

    useEffect(() => {
        console.log ("Categories: ")
        console.log(categories)
    }, [categories]) 

    function buildCategories() {
        return categories.map(category => <Category category={category}  key={category.name}/>)
    }

    
    return (
        <div>
            {categories && buildCategories()}
            <CategoryForm createCaterogry={createCaterogry} />
        </div>
    )
}
