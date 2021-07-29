import React,{useState} from 'react';
import './App.css';
import Todolist from './Todolist';

const App = () =>{

  const [inputList,setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listofItems = () => {
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) =>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!==id;
      });
    });
  };


  return <>
       <div className= "main_div">
         <div className="center_div">
           <br/>
           <h1>ToDo List</h1>
           <br/>
           <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList}></input>
           <button onClick={listofItems}> + </button>
           <ol>
             {items.map((itemval,index)=>{
               return <Todolist text={itemval} 
               key={index} 
               id={index}
               text={itemval}
               onSelect={deleteItem}
               />
             })}
           </ol>
         </div>
       </div>
  </>;
}
export default App
