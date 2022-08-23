import PropTypes from 'prop-types';
import { checkPropTypes } from "prop-types";

export default function Button( {color, text, onClick }) {
    console.log(color);
    return (
        <button onClick={onClick} className={color}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}
Button.defaultProps = {
    text: 'btn'
}

// const arr = [10, 20, 30];
// const arr2 = [0, ...arr] = [0, 10, 20, 30]
// const arr3 = [0, arr] = [0, Array(3)]
// arr3[1][0] = 10