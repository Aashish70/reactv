# forwardRef

### Before version 19

- if you try to pass a ref to a functional component, React will throw an error because functional components cannot recieve refs directly.

- we have to wrap component inside forwardRef.

- forwardRef allows a parent component to directly child component's DOM element.

### After version 19

- We can pass a ref to a functional component normal.