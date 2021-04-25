import React, { useState } from 'react';
import AddUser from './Components/Users/Addusers';
import UsersList from './Components/Users/UsersList';

function App() {
  const [addUsers, setAddUsers] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    setAddUsers(prevUsersList => [...prevUsersList, {id: Math.random().toString(), name: uName, age: uAge}]);
  };
  return (
    <div>
       <AddUser onAddUsers={addUsersHandler}/>
       <UsersList users={addUsers}/>
    </div>
  );
}

export default App;