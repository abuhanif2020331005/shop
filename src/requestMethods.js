import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODIxN2ZlYWIyYWFkZWZiODE4MTY2MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMDQ2MjUwNSwiZXhwIjoxNzIwNzIxNzA1fQ.ITFwV5ma-DBYuRFda-BI_VBArg6oJ6TBzTQIW3GXNQk"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});