import React, {useContext} from "react";
import { GlobalContext } from "../GlobalContext";
import "./pages.css";

const Search = () =>{

    const {searchParam, handleOnChange , handleSubmit} = 
        useContext(GlobalContext);

    return(
        <div id="container">
            <input id="search" name="search" 
            value={searchParam }
             onChange={handleOnChange} 
             placeholder="enter movie name"/>
            <button id="submit" onClick={handleSubmit}>submit</button>
        </div>
    );
};
export default Search;