const INITIAL_STATE = {
  itemList: []
}

export const ItemActionTypes = {
  ADD_NEW_ITEM: 'ADD_NEW_ITEM'
}

const itemReducer = (state=INITIAL_STATE, action) => {
  console.log('reducer',state)
  console.log('reducer',action)
  switch(action.type){
    case ItemActionTypes.SET_CURRENT_ITEM:
      return {
        ...state, 
        currentItem: action.payload
      }

    default:
      return state;
  }
}

export default itemReducer