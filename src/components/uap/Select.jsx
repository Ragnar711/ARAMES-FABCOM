const Select = ({ data, style }) => {
    const uaps = Object.keys(data)

    return (
        <select className={style.select}>
            <option value="" disabled selected>
                Select UAP
            </option>
            {uaps.map((uap) => (
                <option key={uap} value={uap}>
                    {uap}
                </option>
            ))}
        </select>
    )
}

export default Select
