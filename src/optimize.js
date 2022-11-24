import React, { memo, useCallback, useMemo } from "react";

export default function Parent() {
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState("red");
  console.log("parent render");

  const heavyProccess = (count) => {
    if (count < 2000000000) {
    }
    console.log("running");
    return count + 1;
  };

  const memoHeavyProccess = useMemo(() => {
    return heavyProccess(count);
  }, [count]);

  //   const handleCount = () => {
  //     setCount((c) => c + 1);
  //   };
  //   const handleCountCall = useCallback(handleCount, [])
  const handleCount = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  //untuk function
  //klo pake callback yang penting memorized nya yang diganti

  return (
    <div>
      <h1>Parent</h1>
      <p>count : {count}</p>
      <p>count 2 : {memoHeavyProccess}</p>
      <button onClick={handleCount} className="bg-slate-900 rounded text-white w-12 h-7">
        Klik
      </button>
      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
        className="bg-slate-900 rounded text-white w-12 h-7"
      >
        Klik
      </button>
      <button
        onClick={() => {
          setUser("red");
        }}
        className="bg-red-500 ml-10 mr-5 w-9 h-7 text-white rounded"
      >
        Red
      </button>
      <button
        onClick={() => {
          setUser("green");
        }}
        className="bg-green-500 m-5 w-12 h-7 text-white rounded"
      >
        Green
      </button>
      <button
        onClick={() => {
          setUser("blue");
        }}
        className="bg-blue-500 m-5 w-10 h-7 text-white rounded"
      >
        Blue
      </button>
      <div className="w-12 h-12" style={{ backgroundColor: user }}></div>

      <MemorizedChild user={user} handleCount={handleCount} />
    </div>
  );
}

function Child({ user, handleCount }) {
  console.log("child render", Date.now());
  // delay(2000)
  return (
    <div>
      <h2>Child</h2>
      <p>Color : {user}</p>
      <button onClick={handleCount} className="bg-emerald-500 text-white w-52 h-12 rounded">
        Tambah count dari component child
      </button>
    </div>
  );
}

const MemorizedChild = memo(Child); //untuk primitive type data

function delay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
