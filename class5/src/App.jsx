import React, { useState } from 'react'

const App = () => {
  const [marks, setMarks] = useState([88, 98, 19, 29, 32]);
  const [clicked, setClicked] = useState(false);

  const btnClicked = () => {
    const newMarks = marks.map(function(elem){
      return (elem < 95 ? elem + 5 : elem)
    })
    setMarks(newMarks)
    setClicked(true)
  }

  return (
    <div>
      {
        marks.map(function(elem, index) {
          return (
            <h1 key={index}>student {index + 1} marks is {elem} -- Result: ({elem > 33 ? 'PASS' : 'FAIL'})</h1>
          )
        })
      }

      <button disabled={clicked} onClick={btnClicked} className='bg-emerald-500 rounded-3xl border-none px-3 py-5 text-white font-sans font-bold mt-4'>
        Give Them Grace Marks
      </button>
    </div>
  )
}

export default App