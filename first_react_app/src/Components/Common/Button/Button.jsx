const Button = ({ value, type, style }) => {
    return (
        <>
            <button type={type} style={style}>{value}</button>
        </>
    )
}
export default Button