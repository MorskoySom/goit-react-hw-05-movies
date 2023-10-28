import React, { useEffect, useState } from "react";
import { searchReviews } from "api";
import { useParams } from "react-router-dom";

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        searchReviews(movieId)
            .then(data => {
                const reviews = data.results;
                setReviews(reviews);
                console.log(reviews);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, [movieId]);

    return (
        <div>
            <h1> Reviews </h1>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <div>{review.author}</div>
                            <div>{review.content}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews available</p>
            )}
        </div>
    )
}