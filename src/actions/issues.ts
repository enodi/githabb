export const addIssue = (issue: any) => ({
  type: "ADD_ISSUE",
  issue
});

export const startAddIssue = (newIssue = {}) => {
  return dispatch => {
    dispatch(addIssue(newIssue));
  };
};
