import EVT from '../services/Events';
let initialState = {
    initObject: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
    	case EVT.INIT:
    		console.log("---------STATE----------");
    		console.log(state);
    		console.log("---------PAYLOAD----------");
    		console.log(action.payload);
    		console.log("---------NEW OBJECT----------");
    		console.log(Object.assign({}, state,  action.payload));
            return Object.assign({}, state,  action.payload);
            break;
        default:
            return state;
    }
};
