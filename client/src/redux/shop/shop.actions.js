const { shopActionTypes } = require("./shop.types");

// const updateCollections = (collections) => {
//   return {
//     type: shopActionTypes.UPDATE_COLLECTIONS,
//     payload: collections,
//   };
// };

const fetchCollectionsStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_START,
  };
};
const fetchCollectionsSuccess = (collections) => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};
const fetchCollectionsError = (errorMessage) => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_ERROR,
    payload: errorMessage,
  };
};

// const fetchCollections = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStart());
//     collectionRef
//       .get()
//       .then(async (snapshot) => {
//         const collections = convertCollectionsSnapshotToMap(snapshot);
//         // dispatch(updateCollections(collections));
//         dispatch(fetchCollectionsSuccess(collections));
//       })
//       .catch((err) => {
//         dispatch(fetchCollectionsError(err.message));

//       });
//   };
// };

export {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsError,
};
