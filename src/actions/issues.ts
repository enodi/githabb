import database from "../firebase/firebase";

export const addIssue = (issue: any) => ({
  type: "ADD_ISSUE",
  issue
});

export const startAddIssue = (issueData: any = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { title = "", text = "", createdAt = 0 } = issueData;
    const issue = { title, text, createdAt };

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

export const sortIssues = issues => ({
  type: "SORT_ISSUES",
  issues
});

export const startSortIssues = value => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/issues`)
      .orderByChild("createdAt")
      .once("value")
      .then(snapshot => {
        const issues: any[] = [];
        snapshot.forEach(childSnapshot => {
          issues.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        const sortedIssues =
          value === "oldest" ? issues.sort().reverse() : issues;

        dispatch(sortIssues(sortedIssues));
      })
      .catch(error => console.log(error));
  };
};
