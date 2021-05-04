import {ReviewPre} from './ReviewPre.jsx'

export function RevireList ({reviews, removeReview}) {
    if (!reviews || !reviews.length) return <p className="reviews-list"> no reviews</p>
    return <div className="reviews-list">
        {reviews.map(review => <ReviewPre review={review} key={review.id} removeReview={removeReview}/>)}
    </div>
}