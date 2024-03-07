import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onEventSubmit = (event) => {
        event.preventDefault()
        const value = inputValue.trim()
        if(value.length < 1) return
        //onSetCategorys([inputValue])
        onNewCategory(value)
        setInputValue('')
    }
    return (
        <>
        <form className='max-w-sm mx-auto' action="" onSubmit={(event) => onEventSubmit(event)}>
            <div className='mb-5 '>
                <input
                    className=' rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    //ref={searchRef}
                    type="text" 
                    id='searchBar' 
                    name="gifName" 
                    placeholder="Search GIF's"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </div>
            
                <button 
                    type='submit' 
                    //onClick={search} 
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
                        Buscar
            </button>
        </form>
            
        </>
    )
}