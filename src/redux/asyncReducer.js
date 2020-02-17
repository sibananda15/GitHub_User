const initialState = {
    userData: {},
    isFetching: false,
    isError: false,

}
const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return Object.assign({}, state, {
                userData: {},
                isFetching: true,
                isError: false
            })
        case "GET_DATA":
            return Object.assign({}, state, {
                userData: action.data,
                isFetching: false,
                isError: false
            })
        case "GET_ERROR":
            return Object.assign({}, state, {
                userData: {},
                isFetching: false,
                isError: true
            })
        default:
            return state;
    }

}

export default asyncReducer;

// isFetching property will be used to load the loading indicatior depending upon when the API request is made
// isError is used to render an error message in case we do not get back any user data.