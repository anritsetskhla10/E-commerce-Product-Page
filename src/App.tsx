
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import { useState } from "react";
import { TItem } from "./types";


function App() {
  let [counter, setCounter] = useState<number>(0);
  let [item, setItem] = useState<TItem>();

  return (
    <>
    <Header counter={counter} item={item} setItem={setItem} setCounter={setCounter}></Header>
    <Main counter={counter} 
    setCounter={setCounter}
    setItem={setItem}></Main>
    </>
  )
}

export default App
