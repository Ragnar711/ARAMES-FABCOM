const Button = ({ text, style, onClick }) => {
    return (
        <button className={style.button} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
