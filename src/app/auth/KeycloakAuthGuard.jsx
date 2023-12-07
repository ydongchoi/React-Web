import { useKeycloak } from "@react-keycloak/web";
import { MatxLoading } from "app/components";

const KeycloakAuthGuard = ({ children }) => {
    const { keycloak, initialized } = useKeycloak();

    if(!initialized){
        return <MatxLoading/>
    }

    const Login = () => {
        keycloak.login();
    }

    return keycloak.authenticated ? children : <Login />;
}

export default KeycloakAuthGuard;