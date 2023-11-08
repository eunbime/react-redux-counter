import { useDispatch, useSelector } from "react-redux";
import { plusOne, minusOne, plusN, minusN } from "./redux/modules/counter";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const counter = useSelector((state) => {
    return state.counter;
  });

  //dispatch 가져오기
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          dispatch(plusN(Number(number)));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
