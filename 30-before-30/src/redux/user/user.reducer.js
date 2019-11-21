const INITIAL_STATE = {
  currentUser: null
}

export const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state=INITIAL_STATE, action) => {
  console.log('reducer',state)
  console.log('reducer',action)
  switch(action.type){
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state, 
        currentUser: action.payload
      }

    default:
      return state;
  }
}

export default userReducer