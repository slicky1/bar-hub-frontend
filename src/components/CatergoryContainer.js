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
        return categories.map(category => <Category category={category} deleteCategory={deleteCategory} updateCategory={updateCategory} key={category.name}/>)
    }


            //Delete Operation
    function deleteCategory(category) {
        fetch(BASE_URL + 'categories/' + category.id, {
            method: "DELETE"
        })

    

        const newCategories = categories.filter(cat => cat.id !== category.name)
        setCategories(newCategories)
    }

    
    return (
        <div>
            {categories && buildCategories()}
            <CategoryForm createCaterogry={createCaterogry} />
        </div>
    )
}
