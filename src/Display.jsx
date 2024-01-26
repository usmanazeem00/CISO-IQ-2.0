import React, { useEffect, useState } from "react";
import { Map } from "immutable";
import { produce } from "immer";
export default function Display(props) {
  const [text, setText] = useState("Usman Azeem");
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ num: 0, theme: "blue" });
  const num = state.num;
  const theme = state.theme;
  //Compose Function
  // const compose =
  //   (...functions) => (args) =>functions.reduceRight((arg, fn) => fn(arg), args);
  // const double = (x) => x * 2;
  // const cube = (x) => x * x * x;

  // let final_result = compose(cube, double)(5);
  // console.log(final_result);

let book=Map({title:'Harry Potter'})
const book2={title:"Sherlock"}
console.log(book.get("title"))

function publish(book)
{
  return book.set("published",true);
}
const newbook=publish(book)

function immerpublish(book)
{
  return produce(book,draftbook=>{
    draftbook.isbn="1234"
  })
}
const ad={
  title:"SUFI",
  address:{
    hno:242,
    city:"Lahore"
  },
  get:function()
  {
    return this.title
  }
}
setTimeout(() => console.log("Setimeout..."), 1000);
setTimeout(() => console.log("Setimeout2..."), 100);
const tempad={...ad,
address:{...ad.address}
}
tempad.address.hno=333
tempad.address.city="ISB"
console.log(ad)
console.log(tempad)
//const updatedbook=immerpublish(book2)
//console.log(updatedbook)

  const clear = () => {
    setText("");
    setCount((pre) => pre + 1);
    setState((preState) => {
      return { num: preState.num + 10, theme: "red" };
    });
  };
  const handlechange = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    document.title = "You clicked  times " + count;
  }, [count]);
  return (
    <div>
      <h1>{props.name}</h1>
      <h1 style={{ marginLeft: 50, color: "purple" }}>{props.age}</h1>
      <button
        className="btn-primary mx-1"
        onClick={clear}
        style={{ background: "yellow", color: "red", fontFamily: "sans-serif" }}
      >
        Clear
      </button>
      <textarea
        className="form-control"
        id="mybox"
        rows="8"
        
        value={text}
        onChange={handlechange}
      ></textarea>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{count}</p>
        <p>{state.num}</p>
      </div>
      <div className="container mt-5">
      <h1 className="display-4">My Bootstrap-styled Component</h1>
      <div className="alert alert-info" role="alert">
        This is a Bootstrap alert component.
      </div>
      <button className="btn btn-primary">Primary Button</button>
    </div>
    </div>
    
  );
}
