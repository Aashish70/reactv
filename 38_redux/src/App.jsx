import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addToProduct, incProduct } from "./redux/actions/productAction";
import Product from "./product";

function App() {
  const dispatch = useDispatch();
  

  const handleClick = () => {
    dispatch(
      addToProduct({
        name: "you are the great!",
      })
    );
  };

  const handleInc = () => {
    dispatch(incProduct());
  };

  return (
    <>
      <h1>Hm.. Redux sikh rhe hai 😉 </h1>
      <div className="flex gap-5">
        <button onClick={handleClick}>Click</button>
        <button onClick={handleInc}>Inc</button>
      </div>
      <Product />
    </>
  );
}

export default App;
