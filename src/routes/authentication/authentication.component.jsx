import LoginFrom from "../../components/loginFrom/loginFrom.component";
import SignUpForm from "../../components/signUpForm/signUpForm.component";
import {AuthenticationContainer,LoginContainer,SignUpContainer} from "./authentication.styles";

const Authentication = ()=>{

    return(
        <AuthenticationContainer>
            <LoginContainer>
                <h1>已有账号，立即登录</h1>
                <LoginFrom/>
            </LoginContainer>
            <SignUpContainer>
                <h1>没有账号?开始注册</h1>
                <SignUpForm/>
            </SignUpContainer>
        </AuthenticationContainer>
    )

}

export default Authentication
