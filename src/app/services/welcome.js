import rest from "../common/rest";

export const TYPE_KEY = "type";
export const HOTELS = "hotels";
const HOTELS_LOADED = "hotels.loaded";
export const initialState = {
    [HOTELS]: null
};
export default function reducer( state = initialState, action ) {
    let newState;
    switch ( action[ TYPE_KEY ] ) {
        case HOTELS_LOADED:
            newState = {
                ...state,
                [HOTELS]: action[ HOTELS ]
            };
            break;
        default:
            newState = {
                ...state
            };
            break;
    }

    return newState;
}

export function loadHotels() {
    return async ( dispatch, getState ) => {
        try {
            const hotels = await rest.doGet("https://prodynafakeapi.herokuapp.com/api/hotels?count=2");
            dispatch(loadOk(hotels));
        } catch (error) {
            throw new Error(error);
        }
    };
}

function loadOk( json ) {
    return {
        [TYPE_KEY]: HOTELS_LOADED,
        [HOTELS]: json
    };
}
