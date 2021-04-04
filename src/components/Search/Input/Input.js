import SearchIcon from "../../../assets/images/icons/SearchIcon";
import SpinnerIcon from "../../../assets/images/icons/SpinnerIcon";
import CloseIcon from "../../../assets/images/icons/CloseIcon";

import './Input.style.scss';

const Input = props => {

	const { text, searching, onChange, onClear } = props;

	const handleChange = ({ target: { value }}) => {
		onChange(value);
	}

	const handleClose = () => {
		onClear();
	}

	return (
		<div className="input-container">
			<SearchIcon />
			<input type="text" value={text} onChange={handleChange} />
				{ searching ? <SpinnerIcon spin={true}/> : text.length ? <CloseIcon onClick={handleClose} /> : null }
		</div>
	);
};

export default Input;