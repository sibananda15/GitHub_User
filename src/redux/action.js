import store from "./store"
export const fetch_data = () => {
    return {
        type: "FETCH_DATA"
    }
}
export const get_data = (post) => {
    return {
        type: "GET_DATA",
        data: post
    }
}
export const get_error = () => {
    return {
        type: "GET_ERROR"
    }
}
export const thunk_action_creator = username => {
    const user = username.replace(/\s/g, "");
    store.dispatch(fetch_data())
    return function (dispatch, getState) {
        return fetch(`https://api.github.com/users/${user}`)
            .then(data => data.json())
            .then(data => {
                if (data.message === "Not Found") {
                    throw new Error("No such user found!!");
                } else dispatch(get_data(data));
            })
            .catch(err => dispatch(get_error()));
    }
}