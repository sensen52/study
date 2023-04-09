import './App.css';
import {useState} from 'react';


function App(){
const[toDo,setToDo] =useState('')
const[toDos,setToDos]=useState([])
const onChange=(e)=>{
setToDo(e.target.value)
}
const onSubmit=(e)=>{
e.preventDefault();
  if(toDo ===''){
    return;
  }
  setToDos((currentArray)=>[toDo,...currentArray]);
  setToDo("")
}

  return(
    <div id='app'>
      <h2>투두리스트</h2>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='할일목록을 추가해주세요' value={toDo} onChange={onChange}/>
        <button>추가</button>
      </form>
      <ul>
        {toDos.map((item,index)=>(<li key={index}>{item}</li>))}
      </ul>
    </div>
  )
}

export default App;
