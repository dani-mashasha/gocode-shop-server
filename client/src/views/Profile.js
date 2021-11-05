import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  console.log(user);

  return <>{isAuthenticated && <h1> hello {user.name}</h1>}</>;
}

export default Profile;
