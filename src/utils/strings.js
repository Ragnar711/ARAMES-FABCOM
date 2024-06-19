const Capitalize = (str) => {
    if (str.length <= 3) {
        return str.toUpperCase();
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};

export default Capitalize;
