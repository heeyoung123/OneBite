const Button = ({text, color,children}) => {
    const onclickButton = () => {
        console.log(text);
    };

    return <button onClick={onclickButton} style={{color: color}}>{text}-{color.toUpperCase()}{children}</button>;
}

Button.defaultProps ={
    color:"black",
}
export default Button;