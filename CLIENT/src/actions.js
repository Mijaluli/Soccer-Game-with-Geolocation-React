export function getLocation() {
    return dispatch => {
        const geolocation = navigator.geolocation;
        geolocation.getCurrentPosition((position) => {

            dispatch({
                type: "GET_LOCATION",
                payload: position
            });
        });
};


