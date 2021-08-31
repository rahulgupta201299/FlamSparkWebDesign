const Initial_State={
    currentNav: 'home',
}
const NavReducer=(state=Initial_State,action)=>{
    switch(action.type){
        case 'SET_NAV_CHANGE':
            return{
                ...state,
                currentNav: action.payload
            }
        default:
            return state
    }
}
export default NavReducer