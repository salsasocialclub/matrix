// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './Component';

const mapStateToComponentProps = (state) => {
};

const mapDispatchToComponentProps = (dispatch) => {};
// bindActionCreators({}, dispatch);

export default connect(
  mapStateToComponentProps,
  mapDispatchToComponentProps,
)(Component);
