import EVT from '../services/Events';

const reducerActions = {
    init: (data) => {
        return (dispatch) => {
            dispatch(init(data));
        }
    }
};

let init = (initData) => {
    return {
        type: EVT.INIT,
        payload: {
            dataObject: "new Object2",
            dataObjectNew: "new Object2"
        }
    }
};


export default reducerActions;
