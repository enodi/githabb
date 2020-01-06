export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.user
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
