import { useState } from 'react'
import './index.css'
import './components/AddCategory'
import { useRef } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
export const GifExpertApp = () => {
    //const apiKey = process.env.GifExpertApp
    const [categorys, setCategorys] = useState(['star vs evil forces'])
    //const searchRef = useRef(null)
    
    const onSearch = (newCategory) => {
        if(categorys.includes(newCategory)) return
        setCategorys(cat => [newCategory, ...cat])
    }

    
    return( 
    <>
        <h1 className=" sm:w-auto text-4xl sm:text-5xl font-bold text-center p-2 mb-5 text-gray-800" >GifExpertApp</h1>

        {/*Listar categrias*/}
        
        
        

        <AddCategory 
            //onSetCategorys = {setCategorys}
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