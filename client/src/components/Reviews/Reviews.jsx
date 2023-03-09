import { useEffect, useState } from 'react';
import Url_deploy_back from '../../utils/deploy_back';
import Review from './Review/Review';
//import './Reviews.module.css'

const Reviews = ({id}) => {

    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 400px)',
        gap: '16px'
    }

    const [reviews, setReviews] = useState([]);
    useEffect(async() => {
        console.log('xd')
        await fetch(`${Url_deploy_back}/review/component/${id}`)
        .then(data => data.json())
        .then(data => {
            setReviews(data)
        })
    }, [])
    return(
        <div className='Reviews' style={style}>
            {reviews.map(e => <Review email={e.email} score={e.score} review={e.review} />)}
        </div>
    )
}

export default Reviews;