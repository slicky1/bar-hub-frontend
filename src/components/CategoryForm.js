import React, {useState} from 'react'

export default function CategoryForm({createCategory}) {
    const [category, setCategory] = useState({name: "", img_url: ""})

    function handleChange(e) {
        const updatedValue = {...category}
        updatedValue[e.target.name] = e.target.value
        setCategory(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createCategory(category)
    } 


    return (
        <div>
            <h2>Create</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={category.name} onChange={handleChange} />
                <input name="img_url" value={category.img_url} onChange={handleChange} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}