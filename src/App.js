import { useState } from "react";
import "./App.css";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const addNewUserHandler = (user, isEdit) => {
    if (!isEdit) {
      setUsers((prevState) => {
        return [...prevState, user];
      });
      setIsEdit(false);
    } else {
      const userIndex = users.findIndex(
        (user) => user.mobileNumber == editUser.mobileNumber
      );

      setUsers((prevState) => {
        prevState[userIndex] = user;
        return [...prevState];
      });
      setIsEdit(false);
    }
  };

  const editUserHandler = (userForEdit) => {
    setIsEdit(true);
    setEditUser(userForEdit);
  };

  return (
    <div>
      <UserForm onAddUser={addNewUserHandler} isEdit={isEdit} user={editUser} />
      <UsersList users={users} onEditUser={editUserHandler} isEdit={isEdit} />
    </div>
  );
}

export default App;
