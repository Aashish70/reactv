import './App.css'
import Button from './Components/Button'
import Card from './Components/Card'
import Greeting from './Components/Greeting'
import Layout from './Components/Layout'
import List from './Components/List'
import Major from './Components/Major'
import Profile from './Components/Profile'
import User from './Components/User'

function App() {

  const userObj = {
    name: "Prateek",
    age: 10
  }

  const handleClick = console.log("Button Clicked")
  
  return (
    <div className='layout'>
      <Card name="Ashish" age={21} /> 
      <Greeting name="Arav" age={12} isStudent={true}/>
      <Profile user={userObj} />
      <List items={["apple", "banana", "mango"]}/>
      <Button Click={handleClick}/>
      <Major content={<h1>Hello World!</h1>}/>
      <Layout>
        <h1>Welcome to the my Site</h1>
        <p>This is content inside children.</p>
      </Layout>
      <User { ...userObj }/>

    </div>
  )
}

export default App
