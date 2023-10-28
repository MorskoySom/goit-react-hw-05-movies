import React, { useEffect, useState } from "react";
import { searchCast } from "api";
import { useParams } from "react-router-dom";
import { AllCast, CastContainer } from "./Cast.styled";

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        searchCast(movieId)
            .then(data => {
                const cast = data.cast;
                setCast(cast);
                console.log(cast);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, [movieId]);


    return (
        <div>
            <h1> Cast </h1>
            <AllCast>
                {cast.map((actor) => (
                    <CastContainer key={actor.id}>
                        <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                        <div>
                            <div>{actor.name}</div>
                            <div>role: {actor.character}</div>
                        </div>
                    </CastContainer>
                ))}
            </AllCast>
        </div>

    )
}
