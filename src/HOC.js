// import React, { Component } from 'react'

// const HOC = (wrappedcomponent,entity) => {
//   return  class extends Component{
//     state={
//         data:[],
//         queary:"",

//     };

//     componentDidMount(){
//         const fetchData=async()=>{
//             await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
//               .then(res=>res.json())
//               .then(json=>this.setState({data:json}))
//               .catch((err)=>console.log(err))
//         }
//         fetchData()
//     }
//     render(){
//         let {data,query}=this.state;
//         const filteredData=data.filter(e1=>{
//             if(entity ==="users"){
//                 return e1.name.toLowerCase().indexOf(query.toLowerCase())>=0
//             }
//             else if(entity ==="todos"){
//                 return e1.title.toLowerCase().indexOf(query.toLowerCase())>=0
//             }
            
//         })
//         return <div>
//             <input type="text"
//             value={query} 
//             onChange={(e)=>this.setState({query:e.target.value})} />
//             <wrappedcomponent data={filteredData}></wrappedcomponent>
//         </div>
//     }
//   }
// }

// export default HOC

import React, { Component } from 'react'

const HOC = (Wrappedcomponent,entity) => {
  return  class extends Component{
    state={
        data:[],
        query:"",

    };

    componentDidMount(){
        const fetchData=async()=>{

            await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
              .then(res=>res.json())
              .then(json=>this.setState({data:json}))
              .catch((err)=>console.log(err))
        }
        fetchData()
    }
    render(){
        let {data,query}=this.state;
        const filteredData=data.slice(0,10).filter(e1=>{

            if(entity ==="users"){
                return e1.name.toLowerCase().indexOf(query.toLowerCase())>=0
            }
            else if(entity ==="todos"){
                return e1.title.toLowerCase().indexOf(query.toLowerCase())>=0
            }
            
        })
        return <div>
            <input type="text"
            value={query} 
            onChange={(e)=>this.setState({query:e.target.value})} />
            <Wrappedcomponent data={filteredData}></Wrappedcomponent>
        </div>
    }
  }
}

export default HOC
//component wala logic eka reuse karann bawitha karana techniue ekk

