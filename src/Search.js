import React, {useState} from 'react';

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
        resetInputfield();
    }
    return(
        <div className="search">
            <form className="search">
                <input
                value={searchValue.toLowerCase()}
                onChange={handleSearchInputChanges}
                type="text" />
                <button onClick={callSearchFunction}>Search</button>
            </form>

        </div>
    )
}

export default Search;