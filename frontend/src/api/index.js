import axios from "axios";

const url = "http://localhost:5000/tables";

export const fetchTables = () => axios.get(url);
