import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <>
      <h1>Please Sign In</h1>
      <button onClick={() => loginWithRedirect()}>Sign In</button>
      </>
    )
  );
};

export default LoginButton;
