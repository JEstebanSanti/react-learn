import { useState } from 'react'
import './index.css'
import { AddCategory, GifGrid } from './components'
export const GifExpertApp = () => {
    const [categorys, setCategorys] = useState(['star butterfly'])
    //const searchRef = useRef(null)
    
    const onSearch = (newCategory) => {
        if(categorys.includes(newCategory)) return
        setCategorys(cat => [newCategory, ...cat])
    }

    
    return( 
    <>
        <h1 className=" sm:w-auto text-4xl sm:text-7xl font-bold text-center p-2 mb-5 text-gray-800" >GifExpertApp</h1>

        <AddCategory 
            onNewCategory = {event => onSearch(event)}
        />
       {
            categorys.map(category => {
                return (
                        <GifGrid key={category} category={category}/>
                    )
            })
        }
        
    </>)
}