const FilterSelect = ({
    className,
    value,
    onChange,
    options,
    defaultLabel,
}) => {
    return (
        <select className={className} value={value} onChange={onChange}>
            <option value="">{defaultLabel}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default FilterSelect;
