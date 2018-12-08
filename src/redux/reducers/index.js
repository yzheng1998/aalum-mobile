import { ADD_INFO } from '../constants/action-types'

const initialState = {}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
      return { ...state, [action.payload.key]: action.payload.value }
    default:
      return state
  }
}
export default rootReducer
