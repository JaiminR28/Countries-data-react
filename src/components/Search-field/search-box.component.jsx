import "./search-box.styles.css";

const SearchBox = ({ className, placeHolder, onChangeHandler }) => {
	return (
		<div className="Search--bar-component">
			<input
				className={`search--box ${className}`}
				placeholder={placeHolder}
				onChange={onChangeHandler}
			></input>
		</div>
	);
};

export default SearchBox;
