import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, cleanData } from './actions';
import { getData, getStatus, getInfo, getError } from './selectors';

function mapStateToProps(state, props) {
  const keyForData = props.targetName || props.functionName;
  return {
    fetchData: getData(state, keyForData),
    fetchyStatus: getStatus(state, keyForData),
    fetchInfo: getInfo(state, keyForData),
    fetchError: getError(state, keyForData)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchActions: bindActionCreators({ fetchData, cleanData }, dispatch)
  };
}

export default comp => connect(mapStateToProps, mapDispatchToProps)(comp);