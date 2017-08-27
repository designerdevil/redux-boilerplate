import EVT from '../services/Events';

const reducerActions = {
    init: (data) => {
        return (dispatch) => {
            dispatch(init(data));
        }
    }
};

let init = (matchPlayData) => {
    return {
        type: EVT.INIT,
        payload: {
            dataObject: "newGaurav Object2",
            dataObjectNew: "newPriyanka Object2"
        }
    }
};


export default reducerActions;
