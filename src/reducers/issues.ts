const issuesDefaultState = [];

export default (state = issuesDefaultState, action) => {
  switch (action.type) {
    case "ADD_ISSUE":
      return [...state, action.issue];
    default:
      return state;
  }
};
