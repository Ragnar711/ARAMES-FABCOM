const Checkbox = ({ id, label, onChange }) => {
    return (
        <div>
            <input type="checkbox" id={id} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Checkbox;
