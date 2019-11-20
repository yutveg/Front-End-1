const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state=INITIAL_STATE, action) => {
  console.log('reducer',state)
  console.log('reducer',action)
  switch(action.type){
    case ''://set current user propbably
      return {
        ...state, 
        currentUser: action.payload
      }

    default:
      return state;
  }
}

export default userReducer