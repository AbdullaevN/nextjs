import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  //   const [users, setUsers] = useState([
  //     { id: 1, name: "petya" },
  //     { id: 2, name: "misha" },
  //     { id: 3, name: "lena" },
  //     { id: 4, name: "vasya" },
  //   ]);

  return (
    <MainContainer keywords={"users next js"}>
      <h1>Users page</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link legacyBehavior href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
