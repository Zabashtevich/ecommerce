import { useAuth0 } from "@auth0/auth0-react";

export default function AccountPage() {
  const { user, logout } = useAuth0();
  console.log(user);
  return (
    <>
      <div>{JSON.stringify(user)}</div>
      <button onClick={() => logout}>logout</button>
    </>
  );
}
