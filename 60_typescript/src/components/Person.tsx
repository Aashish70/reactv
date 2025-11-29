type PersonProps = {
    name: {
        first: string
        last: string
    }
}

function Person({ name: { first, last } }: PersonProps) {
  return (
    <div>
        <h1>{first} {last}</h1>
    </div>
  )
}

export default Person