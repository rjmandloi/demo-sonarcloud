import React from "react";

export const UserCard = (props) => {
  const { onEditUser, user, isEdit } = props;
  const { name, mobileNumber, address, college } = user;

  const editUserHandler = () => {
    onEditUser(user);
  };

  return (
    <div className="card" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Mobile: {mobileNumber}
        </h6>
        <p className="card-text">Address: {address}</p>
        <p className="card-text">College: {college}</p>
        <button
          onClick={editUserHandler}
          type="button"
          className="btn btn-primary"
          disabled={isEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
