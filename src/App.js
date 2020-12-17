import React, { useState, useCallback } from 'react'
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import Ex4 from './components/Ex4'

const App = () => {
  const [ex, setEx] = useState('Zadanie 4')

  const handleExChange = useCallback(
    (e) => {
      let target = e.target.value
      setEx(target)
    },
    [ex]
  )

  return (
    <>
      <select className='select' onChange={handleExChange}>
        <option value={'Zadanie 1'}>Zadanie 1</option>
        <option value={'Zadanie 2'}>Zadanie 2</option>
        <option value={'Zadanie 3'}>Zadanie 3</option>
        <option value={'Zadanie 4'}>Zadanie 4</option>
      </select>

      {ex === 'Zadanie 1' ? <Ex1 /> : null}
      {ex === 'Zadanie 2' ? <Ex2 /> : null}
      {ex === 'Zadanie 3' ? <Ex3 /> : null}
      {ex === 'Zadanie 4' ? <Ex4 /> : null}
    </>
  )
}

export default App
