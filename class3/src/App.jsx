import React from 'react'
import Button from './Components/Button'

const App = () => {
  let user = ["Chris Evans", "Jon Snow", "Tom Holland", "Peter Parker"]
  return (
    <div>

      {
        user.map(function(elem){
          return <Button user={elem}/>
        })
      }
    </div>
  )
}

export default App
