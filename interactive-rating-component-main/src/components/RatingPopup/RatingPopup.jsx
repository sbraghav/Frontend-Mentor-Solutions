import { useState } from 'react';
import { Fragment } from 'react';
import './RatingPopup.css';
import RatingScale from "../RatingScale/RatingScale";
import IconStar from '../../assets/images/icon-star.svg';
import RatingIllustration from "../../assets/images/illustration-thank-you.svg";
const ratingScale = 5;

export default function RatingPopup() {
    let [isRated, setIsRated] = useState(false);
    let [rating, SetRating] = useState(null);
    const handleRatingSubmit = (e) => {
        if(rating === null){
            alert("Provide feedback to proceed");
            return;
        }
        e.preventDefault();
        setIsRated(!isRated);
    };

    const handleRatingUpdate = (rating) => {
        SetRating(rating);
    };

    let preRatingFragment =
        <Fragment>
            <img className="rating__icon" src={IconStar} alt="icon star"></img>
            <div className="rating__text highlight">
                How did we do?
            </div>
            <div className="rating__info">
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </div>
            <RatingScale selected={rating} scale={ratingScale} handleRatingUpdate={handleRatingUpdate}/>
            <button className="rating__submit"
                onClick={handleRatingSubmit}>
                Submit
            </button>
        </Fragment>;
    
    let postRatingFragment = 
    <Fragment>
        <img className="rating__illustration" src={RatingIllustration} alt="rating illustration"></img>
        <div className="rating__result">You selected {rating} out of {ratingScale}</div>
        <div className="rating__bannerMessage highlight">Thank You!</div>
        <div className="rating__info">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</div>

    </Fragment>

    return <div className="rating-popup">
        {!isRated ?
            (preRatingFragment)
            :
            (postRatingFragment)}
    </div>;
};