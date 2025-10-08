import { useState } from 'react'
import './App.css'
import Accordian from './components/Accordian';


const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces. It helps create reusable UI components."
  },
  {
    id: 2,
    title: "What is Tailwind CSS?",
    content: "Tailwind CSS is a utility-first CSS framework that allows you to design modern websites quickly using pre-defined classes."
  },
  {
    id: 3,
    title: "What is an Accordion?",
    content: "An accordion is a vertically stacked list of items that can be expanded or collapsed to show or hide content."
  },
  {
    id: 4,
    title: "How does useState work in React?",
    content: "The useState hook lets you add state to functional components. It returns a state variable and a function to update it."
  },
  {
    id: 5,
    title: "What is useEffect in React?",
    content: "The useEffect hook lets you perform side effects in function components, like fetching data or updating the DOM."
  }
];


function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>

      {
        accordionData.map((item) => (
          <div key={item.id} className='flex flex-col gap-4'>
            <Accordian title={item.title} content={item.content} isOpen={isOpen}/>
          </div>
        ))
      }

    </>
  )
}

export default App
