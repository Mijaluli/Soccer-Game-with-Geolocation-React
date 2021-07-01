function reducer(state = { value: 0 }, action) {
    switch (action.type) {
        case "GET_LOCATION":
                return Object.assign({},
                    state,
                    {
                        coords: action.payload
                    }
                )
        
      case 'GET_IS_GOAL':
        return Object.assign({},
            state,
            {
                coords: action.payload
            }
        )
      default:
        return state
    }
  }

  export default reducer;