import actionCreators from '.'

export const incrementInfo = dispatch => () => {
  dispatch(actionCreators.incrementInfo())
}
export const decrementInfo = dispatch => () => {
  dispatch(actionCreators.decrementInfo())
}

// export const editRow = dispatch => (payload = {}) => {
//   dispatch(actionCreators.editRow(payload))
//   dispatch(actionCreators.toggleModal(null))
// }

// export const changeSorting = dispatch => (payload = {}) => {
//   dispatch(actionCreators.changeSorting(payload))
// }

// export const toggleModal = dispatch => (payload = {}) => {
//   dispatch(actionCreators.toggleModal(payload))
// }
