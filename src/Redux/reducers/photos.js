
const photosReducer = (state = [], action) => {
    switch(action.type) {
        case "LOAD_PHOTOS":
            return action.payload;
        default:
            return state;
    }
}


export default photosReducer