# useCallback

--> Lifecycle, react memo, useMemo, useCallback

Every re-render = functions are recreated
Even if logic is same, fuction reference changes

# useCallback is react hook that memoize a function, so the same function reference us reused between renders unless dependencies change

# kaha kaha use nhi karna hai 

- function as a prop pass nhi kar rhe ho tab
- small application 
- light weight component hai

# useMemo - value memoize karta hai 
# useCallback - function memoize karta hai