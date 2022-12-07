import { SignOutIconContainer } from "./sign-out.style";
import { useDispatch } from "react-redux";
import { signOut, SetIsSignOutOpen } from "../../store/user/user.action";
import Button, { BUTTON_TYPE_CLASSES }from "../button/button.component";

const SignOutIcon = () => {
    const dispatch = useDispatch();
    const signOutUser = () => {
        dispatch(signOut());
        dispatch(SetIsSignOutOpen(false));
    };
    
    return(
        <SignOutIconContainer >
            <Button 
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={signOutUser}>SignOut </Button>
        </SignOutIconContainer>
    )
};

export default SignOutIcon;