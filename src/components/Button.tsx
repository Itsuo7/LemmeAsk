import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss';
//Defining the type of Button we are going to use
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

//This is a spread operator, getting the props that the button receives and sending to the HTML button
export function Button({ isOutlined, ...props }: ButtonProps){
    return(
        <button className={`button ${isOutlined ? 'outlined': ''}`} 
        {...props}
        />
    )
}
