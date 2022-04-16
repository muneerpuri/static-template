const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIDEBAR":
      return {
        ...state,
        showSideBar:!state.showSideBar
      };
    default:
      return state;
  }
};

export default AuthReducer;
