import { useState } from 'react'
import './index.css'
import './components/AddCategory'
import { useRef } from 'react'
import { AddCategory } from './components/AddCategory'
export const GifExpertApp = () => {
    //const apiKey = process.env.GifExpertApp
    const [categorys, setCategorys] = useState(['one punch', 'star vs evil forces', 'anime'])
    //const searchRef = useRef(null)
    
    const search = () => {
        setCategorys(cat => [...cat, 'Value'])
    }

    
    return( 
    <>
        <h1 className="text-5xl font-bold underline text-gray-800" >GifExpertApp</h1>

        {/*Listar categrias*/}
        <ol>
            {categorys.map(category => <li key = {category} >{category}</li>)}
        </ol>

        <AddCategory onSetCategorys = {setCategorys} />
       
        
    </>)
}