import React, {useState} from 'react';

function Search(props){
    const [searchValue, setSearchValue] = useState("0");

    const handleSearchInputChanges = (e) =>{
        setSearchValue(e.target.value);
    }

    const resetInputfield = () =>{
        setSearchValue(" ")
    }
    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputfield();
    }
    return(
        <div className="search">
            <form action="" className="search">
                <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text" />
                <button onClick={callSearchFunction}>Search</button>
            </form>

        </div>
    )
}

export default Search;