import React from 'react';


const Card = ({nothing}) =>{
    return(
        <div>
            <h1>Logo</h1>
            <h1>{nothing}</h1>
            <h2>Programming Lanuage</h2>
            <p>Description about the language</p>
            <p>My opinion about this particaular lanuage</p>
            <a href="#">View the documentation</a>
            <a href="#">View an example with it</a>
        </div>
    );
}
export default Card;