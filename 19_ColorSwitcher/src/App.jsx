import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [color, setColor] = useState('green')

  const colorName = [
  "red", "blue", "green", "yellow", "black", "white", "gray", "silver", "maroon", "navy",
  "teal", "aqua", "fuchsia", "lime", "olive", "purple", "orange", "brown", "gold", "pink",
  "coral", "crimson", "indigo", "violet", "khaki", "orchid", "salmon", "sienna", "tomato", "turquoise",
  "wheat", "plum", "chocolate", "beige", "ivory", "lavender", "lightblue", "darkblue", "darkgreen", "darkred",
  "darkorange", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "mediumseagreen", "mediumslateblue"
];

  return (
    <>
      <h1 className='mb-7'>🎨 Color Switcher</h1>

      <Card color={color}/>

      <div className='flex flex-row overflow-x-auto gap-2 my-7 h-[200px] w-full'>
        {
          colorName.map((item, idx) => (
            <Button key={idx} color={item} setColor={setColor}>
              {item}
            </Button>
          ))
        }
      </div>

    </>
  )
}

export default App
