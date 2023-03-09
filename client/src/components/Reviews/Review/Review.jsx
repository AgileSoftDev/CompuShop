import { useEffect, useState } from 'react';
import Url_deploy_back from '../../../utils/deploy_back';
//import './Reviews.module.css'

const Review = ({email, componentId, score, review}) => {

    const style = {
        borderRadius: '5px',
        boxShadow: '0px 0px 3px rgba(0, 0, 0, .5)',
        padding: '12px',
        height: '160px'
    }

    const [user, setUser] = useState({});
    useEffect(async() => {
        await fetch(`${Url_deploy_back}/users/db/${email}`)
        .then(data => data.json())
        .then(data => {
            setUser(data)
        })
    }, [])
    const stars = [<i className="fas fa-star" style={{color: score>=1 ? "#FFBA5A" : '#a9a9a9'}}></i>, <i className="fas fa-star" style={{color: score>=2 ? "#FFBA5A" : '#a9a9a9'}}></i>, <i className="fas fa-star" style={{color: score>=3 ? "#FFBA5A" : '#a9a9a9'}}></i>, <i className="fas fa-star" style={{color: score>=4 ? "#FFBA5A" : '#a9a9a9'}}></i>, <i className="fas fa-star" style={{color: score>=5 ? "#FFBA5A" : '#a9a9a9'}}></i>]
    return(
        <div className='Review' style={style}>
            <h3 style={{display: 'inline', marginRight: '16px'}}>{user.name}</h3>
            <div style={{display: 'inline'}}>
                {stars.map(e => e)}
            </div>
            <p>{review}</p>
            
        </div>
    )
}

export default Review;