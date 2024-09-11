// import logo from './logo.svg';
// import './App.css';
// import UserLists from './UserLists';
// import TodosList from './TodosList';
// import SearchUsers from './UserLists'


// function App() {
  
//   return (
//     <div className="section">
//       <SearchUsers/>
//       <TodosList/>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import UserLists from './UserLists';
import TodosList from './TodosList';
import SearchUsers from './UserLists';
import SearchTodos from './TodosList'
import User from './User';


function App() {
  
  return (
    <div className="section">
      <SearchUsers/>
      <SearchTodos/>


     {/* Render props */}
      {/* <User name="vishwa"/> */}
      {/* <User name={()=>"vishwa"}/> */}
        {/* passing paramaeters */}
        {/* <User name={(isLoggedIn)=>isLoggedIn?("vishawa"):("guest")}/> */}
        <User render={(isLoggedIn)=>isLoggedIn?("vishawa"):("guest")}/>
    </div>
  );
}

export default App;

