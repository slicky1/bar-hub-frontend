import React from 'react'

export default function Category({category, deleteCategory}) {
    return (
        <div> 
            <br />
                 <p>{category.name}</p>
                 <p>{category.img_url}</p>

                 <button onClick={() => deleteCategory(category)}>Delete</button>
            <br />
        </div>
    )
}
