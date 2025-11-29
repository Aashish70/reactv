// use type while building application and Interface while building library

type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

function Greet({ name, messageCount = 0, isLoggedIn } : GreetProps ) {
  return (
    <div>
        {
            isLoggedIn ? `Welcome ${ name }! You have ${messageCount} unread messages.` : `Welcome Guest` 
        }
    </div>
  )
}

export default Greet