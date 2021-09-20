import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import Category from './Category.js'

export default function CatergoryContainer() {

    const [categories, setCategories] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'categories')
         .then(res => res.json())
         .then(json => setCategories(json))
    }, [])

    // useEffect(() => {
    //     console.log ("Categories: ")
    //     console.log(categories)
    // }, [categories]) 

    function buildCategories() {
        return categories.map(category => <Category category={category} deleteCategory={deleteCategory} key={category.id}/>)
    }

    function deleteCategory(category) {
        fetch(BASE_URL + 'categories/' + category.id, {
            method: "DELETE"
        })

        const newCategories = categories.filter(cat => cat.id !== category)
        setCategories(newCategories)
    }

    return (
        <div>
            {categories && buildCategories()}
        </div>
    )
}
