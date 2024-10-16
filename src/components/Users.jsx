
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
      const loadedUsers = useLoaderData()
      const [users, setUsers] = useState(loadedUsers)

      const handleDelete = id =>{

        fetch(`http://localhost:5000/users/${id}`,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.deletedCount>0){
            console.log("deleted successfully")
          const remainingUsers = users.filter(user => user._id !== id)
            setUsers(remainingUsers)
          }
        
        })
      }

      return (
            <div>
                  <h1>Users:{users.length}</h1>
                  <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Email</th>
        <th>CreateAt</th>
        <th>last logged in</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user=>
        <tr key={user._id}>
        <th>1</th> 
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td></td>
        <td>
          <button onClick={()=>handleDelete(user._id)} className='btn'>X</button>
        </td>

      </tr>
        )
      }
    </tbody>
  </table>
</div>
            </div>
      );
};

export default Users;