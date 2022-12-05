import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "../../styles/user.module.scss";

export default function ({ user }) {
  const router = useRouter();
  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>user with id: {router.query.id}</h1>
        <div>user name - {user.name}</div>
      </div>
    </MainContainer>
  );
}

// export async function getStaticProps(context) {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const user = await res.json();
//   return {
//     props: { user }, // will be passed to the page component as props
//   };
// }

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();
  return {
    props: { user },
  };
}
