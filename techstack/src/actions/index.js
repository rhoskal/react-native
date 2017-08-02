export const selectedLibraryId = (libraryId) => {
  return {
    type: 'selected_library',
    payload: libraryId
  };
};
