import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-800 to-blue-600 flex justify-center items-center text-white flex-col'>
      <h2 className='text-3xl bold'>Browser all Templates</h2>
      <p>What would you like to  create today?</p>
      <div className='w-full flex  justify-center items-center'>
        <div className='flex items-center justify-center gap-2 p-2 border rounded bg-white my-5 w-[50%]'> 
          <Search className='text-primary w-5'/>
          <input type="text" placeholder='Search' 
          onChange={(event)=>onSearchInput(event.target.value)}
          className='bg-transparent text-black px-2 outline-none w-full'/>
        </div>
      </div>
    </div>
  )
}

export default SearchSection