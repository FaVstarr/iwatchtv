import React, {useState} from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Search({search}){
    const [searchValue, setSearchValue] = useState("");
    

    const handleSearchInputChanges = (e) =>{
        setSearchValue(e.target.value);
    }

    const resetInputfield = () =>{
        setSearchValue(" ")
    }
    const callSearchFunction = (e) => {
        e.preventDefault();
        search(searchValue);
        resetInputfield('Search Movies...');
    }
    return(
        <div className="search">
            <form className="search">
                <input
                value={searchValue.toLowerCase()}
                onChange={handleSearchInputChanges}
                type="text"
                placeholder='Search Movies...'
                className='input-search' />
                <button onClick={callSearchFunction} className="btn-search"><FontAwesomeIcon icon={faSearch}/></button>
            </form>

        </div>
    )
}

export default Search;