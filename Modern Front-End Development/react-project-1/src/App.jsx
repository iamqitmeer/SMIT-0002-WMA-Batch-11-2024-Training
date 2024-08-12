import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-purple-200 w-full h-screen flex items-center justify-center gap-4'>
      <div>
        <h1 className='text-white text-[150px] text-purple-700 text-center'>{count}</h1>
          <button className='p-4 px-6 text-white bg-purple-700 rounded-xl m-4 font-bold text-xl' onClick={() => setCount(count + 1)}>increment</button>
          <button className='p-4 px-6 text-white bg-purple-700 rounded-xl m-4 font-bold text-xl' onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    </div>
  )
}

export default App
