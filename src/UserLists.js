// import React from 'react'
// import { useState ,useEffect } from 'react';
// import HOC from './HOC';

// const UserLists = (props) => {
// //     const [users,setUsers] = useState([]);
// //     const [query,setQuery] = useState("");
  
// //   useEffect(()=>{
// //     const fetchUsers =async ()=>{
// //       await fetch("https://jsonplaceholder.typicode.com/users")
// //       .then(res=>res.json())
// //       .then(json=>setUsers(json))
// //       .catch((err)=>console.log(err))
// //     }
// //     fetchUsers()
// //   },[])

// //   const filteredData=users.filter(e1=>{
// //     return e1.name.toLowerCase().indexOf(query.toLowerCase())>=0
// //   }
    
// //   )
//   return (
    
//     <div>
// {/* 
//         <h1>Users</h1>
//         <p>You searched for: {query}</p>
//       <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
//     {
//         filteredData.length===0?<h1>Data Not Found</h1>:
//         filteredData.map(value=>{
//             return <p key={value.id}>{value.name}</p>
//         })
//     } */}
//     {
//         props.data.length ===0?<h1>Data Not Found</h1>:
//         props.data.map(value=>{
//             return( <p key={value.id}>{value.name}</p>

//             )
//         })
//     }
//     </div>
//   )
// }
// const SearchUsers =HOC(UserLists,"users")

// export default SearchUsers;

import React from 'react'
import { useState ,useEffect } from 'react';
import HOC from './HOC';

const UserLists = (props) => {
//     const [users,setUsers] = useState([]);
//     const [query,setQuery] = useState("");
  
//   useEffect(()=>{
//     const fetchUsers =async ()=>{
//       await fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res=>res.json())
//       .then(json=>setUsers(json))
//       .catch((err)=>console.log(err))
//     }
//     fetchUsers()
//   },[])

//   const filteredData=users.filter(e1=>{
//     return e1.name.toLowerCase().indexOf(query.toLowerCase())>=0
//   }
    
//   )
  return (
    
    <div>
{/* 
        <h1>Users</h1>
        <p>You searched for: {query}</p>
      <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
    {
        filteredData.length===0?<h1>Data Not Found</h1>:
        filteredData.map(value=>{
            return <p key={value.id}>{value.name}</p>
        })
    } */}
    {
        props.data.length ===0?<h1>Data Not Found</h1>:
        props.data.map(value=>{
            return( <p key={value.id}>{value.name}</p>

            )
        })
    }
    </div>
  )
}
const SearchUsers =HOC(UserLists,"users")

export default SearchUsers;
