import React, {Component} from 'react';
import { connect } from 'react-redux';
import ModuleButton from '../component/buttonComponent';
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
            <ModuleButton onClickVal={this.onClickVal} />
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
