export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // initializing functions to reference firebase
    const firestore = getFirestore();
    // this below is asyncronous
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Silvestre",
        authorLastName: "Vivo",
        authorId: 1234,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project: project
        });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
