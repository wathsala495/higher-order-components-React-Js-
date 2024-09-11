import React from 'react'
import { useState ,useEffect } from 'react';
import HOC from './HOC';

const TodosList = (props) => {

//     const [todos,setTodos] = useState([]);
//     const [query,setQuery] = useState("");
  
//   useEffect(()=>{
//     const fetchTodos =async ()=>{
//       await fetch("https://jsonplaceholder.typicode.com/todos")
//       .then(res=>res.json())
//       .then(json=>setTodos(json))
//       .catch((err)=>console.log(err))
//     }
//     fetchTodos()
//   },[])

//   const filteredData=todos.slice(0,10).filter(e1=>{
//     return e1.title.toLowerCase().indexOf(query.toLowerCase())>=0
//   }
// )
    
  return (
    <div>
        {/* <h1>Todos</h1>
    <p>You searched for: {query}</p>
  <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
{
    filteredData.length===0?<h1>Data Not Found</h1>:
    filteredData.map(value=>{
        return <p key={value.id}>{value.title}</p>
    })
} */}

{
        props.data.length ===0?<h1>Data Not Found</h1>:
        props.data.map(value=>{
            return( <p key={value.id}>{value.title}</p>

            )
        })
    }
</div>
  )
}
const SearchTodos =HOC(TodosList,"todos")
export default SearchTodos
