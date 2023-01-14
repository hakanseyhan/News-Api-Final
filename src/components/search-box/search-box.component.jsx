import './search-box.style.css'

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
    <div class="input-box">
        <i class="uil uil-search"></i>
        <input type='search'
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler} />
        <button class="button">Ara</button>
    </div>
);


export default SearchBox;