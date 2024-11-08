import axios from 'axios';
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {addFeed} from '../utils/feedSlice';
import UserCard from './UserCard';
import {BASE_URL} from '../utils/constant';

const Feed = () => {

    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();

    const getFeed = async () => {
        if (feed) return;
        try {
            const res = await axios.get(BASE_URL + "/user/feed", {withCredentials: true});
            dispatch(addFeed(res?.data))
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getFeed();
    }, [])

    return feed && (
        <div className='flex justify-center my-10'><UserCard user={feed[0]} /></div>
    )
}

export default Feed