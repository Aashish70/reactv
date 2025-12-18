import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import User from './components/User'
import { decrement, increment, incrementByAmount } from "./store/feature/counter/counterSlice";
import { useEffect, useState } from "react";
import { fetchUser } from "./store/feature/user/userSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [value, setValue] = useState('')

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const incrementByValueHandler = () => {
    dispatch(incrementByAmount(Number(value)))
    setValue('')
  }

  useEffect(() => {
    dispatch(fetchUser)
  })

  return (
    <>
      <div className="flex gap-4 ">
        <h1>Count: {counter}</h1>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="border rounded" placeholder="Enter amount.." />
      </div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementByValueHandler}>ChangeByValue</button>
      <User />
    </>
  );
}

export default App;
