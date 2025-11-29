type oscarProp = {
    children: React.ReactNode
}

function Oscar(props: oscarProp) {
  return (
    <div>{props.children}</div>
  )
}

export default Oscar