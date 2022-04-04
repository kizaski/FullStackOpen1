const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = ( state = initialState, action ) =>
{
  console.log( action )
  switch ( action.type )
  {
    case 'GOOD':
      state.good += 1
      return state
    case 'OK':
      state.ok += 1
      return state
    case 'BAD':
      state.bad += 1
      return state
    case 'ZERO':
      for ( const [ key, value ] of Object.entries( state ) )
      {
        state[ `${ key }` ] = 0
      }
      return state
    default: return state
  }

}

export default counterReducer