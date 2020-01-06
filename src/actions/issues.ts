import database from "../firebase/firebase";

export const addIssue = (issue: any) => ({
  type: "ADD_ISSUE",
  issue
});

export const startAddIssue = (issue = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}/issues`)
      .push(issue)
      .then(ref => {
        dispatch(addIssue({ id: ref.key, ...issue }));
      });
  };
};
