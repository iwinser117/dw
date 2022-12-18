import React from 'react';

const StatusPerLive = ({character}) => {
    return (
        <img src={character.image} className="rounded-circle img-trg-person-live" alt="" />
    );
}

export default StatusPerLive;