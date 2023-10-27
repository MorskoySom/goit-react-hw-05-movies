

export default function Cast() {
    return <h1> Cast </h1>
}


// import { searchCast } from "api";
// import React, { useState, useEffect } from "react";


// export default function Cast({ movieId }) {
//     const [castData, setCastData] = useState(null);

//     const fetchCastData = async () => {
//         try {
//             const data = await searchCast(movieId);
//             setCastData(data);
//         } catch (error) {
//             console.error("Error fetching cast data:", error);
//         }
//     };

//     useEffect(() => {
//         fetchCastData();
//     }, [movieId]);

//     if (castData === null) {
//         return <div>Loading Cast...</div>;
//     }

//     return (
//         <div>
//             <h2>Actors</h2>
//             <ul>
//                 {castData.cast.map((actor) => (
//                     <li key={actor.id}>{actor.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }