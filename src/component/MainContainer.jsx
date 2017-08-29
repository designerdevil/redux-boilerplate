import React, {Component} from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../actions/actions';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.onClickVal = this.onClickVal.bind(this);
    }
	onClickVal(_this, val) {
		let dispatch = this.props.dispatch;
        dispatch(ACTIONS.init(
            {
            	dataObject: "newGaurav Object",
            	dataObjectNew: "newPriyanka Object"
            }
        ));
	}
    render(){
        return (
            <button onClick={this.onClickVal}>Click Me</button>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        dataObject: "obja",
        dataObjectNew: "objb"
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
