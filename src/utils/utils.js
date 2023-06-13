import jwtDecode from "jwt-decode";
import { getCookie } from ".";

const token = getCookie("user") ?? "";
let decodedToken = null;

if (token) {
  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    console.error("Invalid token", error);
  }
}

export const user = decodedToken;
