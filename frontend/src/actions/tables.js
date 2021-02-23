import * as api from "../api";

export const getTables = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTables();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
