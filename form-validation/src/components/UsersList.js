import React from "react";
import { UserCard } from "./UserCard";

export const UsersList = (props) => {
  const { users, onEditUser, isEdit } = props;
  return (
    <div>
      {users.map((user) => {
        return (
          <UserCard
            key={users.name}
            user={user}
            isEdit={isEdit}
            onEditUser={onEditUser}
          />
        );
      })}
    </div>
  );
};
