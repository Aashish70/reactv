import "./App.css";
import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <>
      <div className=" bg-gray-400 p-10 h-full select-none">
        <h1 className="text-center text-2xl my-2">App</h1>
        <div className="grid grid-cols-1 gap-3">
          <A />
          <B />
        </div>
      </div>
    </>
  );
}

export default App;
