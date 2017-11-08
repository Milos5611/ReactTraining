import React from "react";

const HotelName = ( { hotels, ...rest } ) => {
    return (
        hotels ?
            <div>{hotels}</div> : null
    );
};

export default HotelName;
