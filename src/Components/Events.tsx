import { useState } from "react";

export function Events({ changeName, setChangeName }:any) {
  const [count, setCount] = useState(0);
  function handleClick() {
    setChangeName(`${changeName}clicked`);
    console.log("clicked");
    return <h1>Hello world</h1>;
  }
  function handleIncrementLike(){
    setCount(count+1);
    console.log("count ", count)
  }
  return (
    <div>
      {/* <h1>{changeName}</h1>
      <button onClick={handleClick}>Click Me</button> */}
     
      <button onClick={setCount(count+1)}>Click Me</button>
      <h1>{count}</h1>
      {/* <button onClick={handleIncrementLike}>Click Me</button>  */}
     
    </div>
  );
}
