export function manageFriends(state, action){

  console.log(action)
  switch (action.type) {
    case 'ADD_FRIEND':
      state = {
        friends:[
          ...state.friends, action.friend
        ]
      }
      return state;
      break;
    case 'REMOVE_FRIEND':
      const removeIndex = state.friends.findIndex((friend) => friend.id === action.id)

      state = {
        friends: [
          ...state.friends.slice(0, removeIndex),
          ...state.friends.slice(removeIndex +1)
        ]
      }
      return state
    default:
      return state
  }
}
