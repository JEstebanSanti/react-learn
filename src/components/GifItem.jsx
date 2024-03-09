import React from 'react'

export const GifItem = ({id, title, url, i}) => {
  return (
    <div
      className={`flex-auto justify-center align-middle row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 ${
        i === 3 || i === 6 ? "col-span-2" : ""
      }`}>
        <div>
          <img className=' h-auto rounded-t-lg mx-auto p-2 mb-3' src={url} alt={title} />
        </div>
        <div>
          <h4 className=' font-semibold text-lg sm:text-xl text-center'>{title}</h4>
        </div>
    </div>
  )
}
