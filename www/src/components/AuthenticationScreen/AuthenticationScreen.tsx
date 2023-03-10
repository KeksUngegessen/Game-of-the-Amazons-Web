import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import AuthButton from "@hs-anhalt/auth-button";

import "../../styles/components/_authentication-screen.scss"


interface Props extends RouteComponentProps {
    onAuthorize: () => void
}


interface State {
}


class AuthenticationScreen extends Component<Props, State> {
    render() {
        return (
            <div className={"auth-button"}>
                <AuthButton
                    authServiceURL={"https://webengineering.ins.hs-anhalt.de:40989"}
                    serviceBaseURLs={["https://webengineering.ins.hs-anhalt.de:40911"]}
                    onAuthorize={() => {
                        this.props.onAuthorize()
                        this.props.history.push("/lobby")
                    }}
                />
            </div>
        )
    }
}


export default withRouter(AuthenticationScreen)
