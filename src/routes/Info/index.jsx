import React from 'react'
import { connect } from 'react-redux'

const Info = props => (
  <div>
    Info sweet Info: {props.info !== undefined ? props.info : 'N/A'} - data kept
    from one screen to the other!
  </div>
)

const mapStateToProps = state => ({
  info: state.info.info,
})

export default connect(mapStateToProps)(Info)
