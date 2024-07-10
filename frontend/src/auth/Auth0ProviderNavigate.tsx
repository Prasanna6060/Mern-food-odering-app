import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode
}

const Auth0ProviderNavigate = ({children}: Props) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    // const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  

    if (!domain || !clientId || !redirectUri ) {
        throw new Error("unable to initialise auth");
      }

      const onRedirectCallback = (appstate?: AppState, user?: User) => {
        console.log("User", user)
      }
    
    return (
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: redirectUri,
            // audience,
          }}
          onRedirectCallback={onRedirectCallback}
        >
          {children}
        </Auth0Provider>
      );
}




export default Auth0ProviderNavigate;