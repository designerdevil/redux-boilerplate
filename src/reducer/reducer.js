import EVT from '../services/Events';
let initialState = {
    initObject: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
    	case EVT.INIT:
            return Object.assign({}, state,  action.payload);
            break;
        default:
            return state;
    }
};
