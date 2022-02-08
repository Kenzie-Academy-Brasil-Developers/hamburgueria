
const InputSearch = ({className, placeholder, value, onChange}) => {
    return (
        <input type="text" 
        className={className} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        /> 
    )
}

export default InputSearch