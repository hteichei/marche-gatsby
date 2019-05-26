const initialState = {}

const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const SET_INITIAL_STATE = 'SET_INITIAL_STATE'

export const handleAddItem = item => ({ type: ADD_ITEM, item })
export const handleRemoveItem = id => ({ type: REMOVE_ITEM, id })
export const handleUpdateQuantity = item => ({ type: UPDATE_QUANTITY, item })
export const hydrateCart = cartItems => ({ type: SET_INITIAL_STATE, cartItems })

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return {
        ...state,
        lineItems: action.cartItems,
      }
    case ADD_ITEM:
      return { ...state, lineItems: [...state.lineItemsaction, action.item] }
    case REMOVE_ITEM:
      return {
        ...state,
        lineItems: state.lineItems.filter(item => item.id !== action.id),
      }
    case UPDATE_QUANTITY:
      return {
        ...state,
        lineItems: state.lineItems.map(item =>
          item.id === action.item.id
            ? { ...item, quantity: action.item.quantity }
            : item
        ),
      }
    default:
      return state
  }
}
