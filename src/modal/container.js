import * as Actions from './actions.js';
import {connect} from 'react-redux';
import Counter from '../component/counter'

function mapStateToProps(state, ownProps) {
    return {
      value: state[ownProps.caption]
    }
  }
  
  function mapDispatchToProps(dispatch, ownProps) {
    return {
      onIncrement: () => {
        dispatch(Actions.increment(ownProps.caption));
      },
      onDecrement: () => {
        dispatch(Actions.decrement(ownProps.caption));
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);