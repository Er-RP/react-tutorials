import React from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "./usersSlice";

const UsersList = () => {
  const users = useSelector(getAllUsers);
  return (
    <div style={{ margin: "20px 50px" }}>
      {users?.map((user, i) => (
        <p key={i} style={{ margin: "10px 5px" }}>
          {user?.name}
        </p>
      ))}
    </div>
  );
};

export default UsersList;
