import React from 'react'
import { connect } from 'react-redux'
import { decrementInfo, incrementInfo } from '../../actions/actionDispatchers'

const Home = props => (
  <div>
    Home sweet home
    <button onClick={props.decrementInfo}>Decrement Info -- </button>
    <button onClick={props.incrementInfo}>Increment Info ++ </button>
    {props.info}
  </div>
)

const mapStateToProps = state => ({
  info: state.info.info,
})

const mapDispatchToProps = dispatch => ({
  decrementInfo: decrementInfo(dispatch),
  incrementInfo: incrementInfo(dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
