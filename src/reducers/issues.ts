const issuesDefaultState = [];

export default (state = issuesDefaultState, action) => {
  switch (action.type) {
    case "ADD_ISSUE":
      return [...state, action.issue];
    case "LIST_ISSUES":
      return action.issues;
    case "SORT_ISSUES":
      return action.issues;
    default:
      return state;
  }
};
