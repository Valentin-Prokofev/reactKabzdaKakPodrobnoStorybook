import React, {useState} from 'react';

import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
};

export const EmptyRating = () => <Rating value={0} callBack={a=>a}/>
export const Rating1 = () => <Rating value={1} callBack={a=>a}/>
export const Rating2 = () => <Rating value={2} callBack={a=>a}/>
export const Rating3 = () => <Rating value={3} callBack={a=>a}/>
export const Rating4 = () => <Rating value={4} callBack={a=>a}/>
export const Rating5 = () => <Rating value={5} callBack={a=>a}/>
export const RatingChanging = () => {
  const [rating, setRating] = useState<RatingValueType>(3)

    return <Rating value={rating} callBack={setRating}/>
}

