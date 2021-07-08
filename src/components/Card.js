import React from "react";

const Card = ({name, email, id}) => {

    return(
        <div className="">
            <img alt="cats-friends" src={`https://robohash.org/${id}?200x200&set=set4`}/>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <a href="/">Send Message</a>
        </div>
    )
};

export default Card;