import React, {useState} from 'react'

export default function Category({category, deleteCategory, updateCategory}) {
    const [newCategory, setNewCategory] = useState({...category})

    function handleChange(e){
        const updatedValue = {...newCategory}
        updatedValue[e.target.name] = e.target.value
        setNewCategory({...updatedValue})
    }

    function handleUpdate(e){
        e.preventDefault()
        updateCategory(newCategory)
    }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     createCategory(category)
    // }


    return (
        <div> 
            <br />
                 <p>{category.name}</p>
                 <p>{category.img_url}</p>

                 <button onClick={() => deleteCategory(category)}>Delete</button>

                 <form onSubmit={handleUpdate}>
                     <input name="name" value={newCategory.name} onChange={handleChange} />
                     <input name="img_url" value={newCategory.img_url} onChange={handleChange} />
                     <button type="submit">Update</button>
                </form>
            <br />
        </div>
    )
}
