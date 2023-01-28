import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  return (
    <main className="column">
      <h1>TICKET APP</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          {isAuthenticated && (
            <>
              <LogoutButton />
              <Home />
            </>
          )}
        </>
      )}
    </main>
  );
}

export default App;
