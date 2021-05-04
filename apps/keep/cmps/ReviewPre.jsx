import {RatingStars} from './RatingStars';
export function RevirePre({review, removeReview}) {
    return <div className="review">
        <div>
            <h3>{review.fullName}</h3><span>{review.readAt}</span>
            <button onClick={() => removeReview(review.id)}>X</button>
        </div>
        <div className="stars">
            <RatingStars rating={review.rate} isPreview={true} />
        </div>
        <p>{review.txt} </p>


    </div>
}