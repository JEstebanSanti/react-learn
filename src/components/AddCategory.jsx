import { useState } from 'react'

export const AddCategory = ({onSetCategorys}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onEventSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length < 1) return
        onSetCategorys([inputValue])

    }
    return (
        <>
        <form action="" onSubmit={(event) => onEventSubmit(event)}>
            <input
                    //ref={searchRef}
                    type="text" 
                    id='searchBar' 
                    name="gifName" 
                    placeholder='add Category'
                    value={inputValue}
                    onChange={onInputChange}
                />
                <button 
                    type='submit' 
                    //onClick={search} 
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 p-2 m-3'>
                        Buscar
            </button>
        </form>
            
        </>
    )
}