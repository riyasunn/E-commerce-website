import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './button.styles';
/* we have three kinds of button:
default

inverted

google sign in
*/

export const BUTTON_TYPE_CLASSES = {
    base:'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => 
    ({
        [BUTTON_TYPE_CLASSES.base]:BaseButton,
        [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]:InvertedButton,
    }[buttonType]);



const Button = ({ children, buttonType, isLoading, ...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return(
        <CustomButton 
        // className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} 
        {...otherProps}
        disabled={isLoading}
        >
         { isLoading ? <ButtonSpinner /> :children}
        </CustomButton>
    );
};
export default Button;
