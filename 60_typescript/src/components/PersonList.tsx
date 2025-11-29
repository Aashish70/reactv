
// props of array of object
type PersonListProps = {
    name: {
        first: string
        last: string
    }[]
}

function PersonList(props : PersonListProps) {
    console.log(props)
  return (
    <div>
        {
            props.name.map((n) => (
                <li key={n.first}>{n.first} {n.last}</li>
            ))
        }
    </div>
  )
}

export default PersonList