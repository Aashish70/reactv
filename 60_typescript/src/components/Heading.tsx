type HeadingProp = {
    children: string
}

function Heading(props: HeadingProp) {
  return (
    <h2>{props.children}</h2>
  )
}

export default Heading