import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import Category from './Category.js'
import CategoryForm from './CategoryForm.js'

export default function CategoryContainer() {

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
        return categories.map(category => <Category category={category} deleteCategory={deleteCategory} updateCategory={updateCategory} key={category.id}/>)
    }

    // Create Operation

    function createCategory(category){
        fetch(BASE_URL + 'categories', {
            method: "POST",
            body: JSON.stringify(category),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(json => setCategories([...categories, json]))
    }

    // Update Operation

        function updateCategory(category) {
            fetch(BASE_URL + 'categories/' + category.id, {
                method: "PATCH",
                body: JSON.stringify(category),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })

            const newCategories = categories.map(cat => {
                if (cat.id === category.id) {
                    cat = category
                }
                return cat
            })
            setCategories(newCategories)
        }

            //Delete Operation
    function deleteCategory(category) {
        fetch(BASE_URL + 'categories/' + category.id, {
            method: "DELETE"
        })

    

        const newCategories = categories.filter(cat => cat.id !== category.id)
        setCategories(newCategories)
    }

    
    return (
        <div>
            {categories && buildCategories()}
            <CategoryForm createCategory={createCategory} />
        </div>
    )
}
