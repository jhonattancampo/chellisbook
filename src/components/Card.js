import React from "react";

const Card = ({name, email, id}) => {

    return(
        <div className="dib br3 pa3 ma2 grow bw2 shadow-5 bg-near-white">
            <img className='br-100 w-50 ba b--black-10 pa2 bw1'
                 alt="cats-friends"
                 src={`https://robohash.org/${id}?200x200&set=set4`}
                 title="Photo of chelli's frinds"

            />
            <h1 className='f3 mb2'>{name}</h1>
            <h2 className='f5 fw4 gray mt0'>{email}</h2>
            <a className='link tc ph3 pv1 db bg-animate bg-purple hover-bg-light-purple white f6 br1' href="/">Send Message</a>
        </div>
    )
};

export default Card;