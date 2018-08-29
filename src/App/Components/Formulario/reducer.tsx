const LOAD = 'LOAD_DATA'

export const reducer = (state:any = {}, action:any) => {
  switch (action.type) {
    case LOAD:
      return action.payload
    default:
      return state
  }
}
