import React from 'react'

export default function Category({category}) {
    return (
        <div> 
            <br />
                 <p>{category.name}</p>
                 <p>{category.img_url}</p>
            <br />
        </div>
    )
}
