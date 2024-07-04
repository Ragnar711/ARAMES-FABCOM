const Select = ({ title, data, style }) => {
    return (
        <select className={style.selector}>
            <option value="" disabled selected>
                {title}
            </option>
            {data.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    )
}

export default Select
