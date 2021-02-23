export default (tables = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return tables;
    default:
      return tables;
  }
};
