import box from './app.js'
import circle from './test.js'

let h1 = React.createElement('h1', {id:'heading1'}, "This is h1.")
let h2 = React.createElement('h2', {id:'heading2'}, 'This is h2.')
let div = React.createElement('div',{id:'div'}, [h1, box(), circle(), h2])
let root = ReactDOM.createRoot(document.querySelector('#container'))

root.render(div)
