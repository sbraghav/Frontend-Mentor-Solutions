import './RatingScale.css';

export default function RatingScale(props) {
    return <div className="rating-bar">
        {[...Array(props.scale)].map((item, index) => {
            return (<span className={["rating-bar__option", props.selected === index + 1 ? 'selected':''].join(" ")}
                key={index}
                isActive={props.selected === index + 1}
                onClick={() => {
                    props.handleRatingUpdate(index + 1);
                }
                }
            >{index + 1}</span>)
        })}
    </div>
}