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

export const listIssues = issues => ({
  type: "LIST_ISSUES",
  issues
});

export const startListIssues = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/issues`)
      .once("value")
      .then(snapshot => {
        const issues: any[] = [];
        snapshot.forEach(childSnapshot => {
          issues.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(listIssues(issues));
      })
      .catch(error => console.log(error));
  };
};
