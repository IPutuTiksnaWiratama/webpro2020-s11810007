// import react from 'react';

// const Card = ({name, institution, address, phone}) =>{
//     return (
//         <div className="card-container">
//             <p>{name}</p>
//             <p>{institution}</p>
//             <p>{address}</p>
//             <p>{phone}</p>
//         </div>
//     )
// }

// export default Card;

  
import React from 'react';

const Card = ({name, username, email, phone}) =>{
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default Card;