const Button = (props) => {
    const { type, text = "Default" } = props;
    return (
        <button type={type}>
            {text}
        </button>
    );
}

export default Button;