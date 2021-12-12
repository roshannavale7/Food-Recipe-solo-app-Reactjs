import React from "react";
const Header = (props) =>{
    const {search,onInputChange}=props;
    return(
    <div className="jumbotron">
        
        <h1 className="display-1"><span className="material-icons brand-icon">food_bank</span>Food Recipe</h1>
        
        
        <div className="input-group w-50 mx-auto">
            <input 
            type="text" 
            className="form-control " 
            placeholder="Search your recipes here..." 
            value={search}
            onChange={onInputChange}
            />
            <span className="input-group-text btn btn-primary " id="basic-addon2">Search here</span>
        </div>
    </div>
    );
};

export default Header;