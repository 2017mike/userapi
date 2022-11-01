import React from "react";
import { useQuery } from "@tanstack/react-query";
import Toolbar from "../../components/Toolbar";

interface Props {}

type User = {
  name: string;
  email: string;
  id: number;
  phone: string;
  username: string;
  website: string;
};

const Home = (props: Props) => {
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );

  if (isLoading) return <div>"Loading...";</div>;

  if (error) return <div>"An error has occurred: ";</div>;

  console.log(data);

  const filterData = (data: User[]): void => {};

  return (
    <div>
      <Toolbar></Toolbar>
      {data.map((user: User) => (
        <React.Fragment key={user.id}>
          {" "}
          <h1>{user.name}</h1>
          <p>{user.username}</p>
          <strong>👀 {user.email}</strong>{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Home;
