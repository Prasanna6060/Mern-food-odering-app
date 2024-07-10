import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
       <span className="flex items-center gap-2">
        {isAuthenticated ? (
          <UsernameMenu />
        ) : (
          <Button
          variant="ghost"
          className="text-xl font-bold hover:text-orange-500 hover:bg-white"
          onClick={async() => await loginWithRedirect()}
        >
          Login
        </Button>
        )}
       </span>
    
  );
};

export default MainNav;
