import jwtDecode from "jwt-decode";
import { getCookie } from ".";

export default function getUser() {
  const token = getCookie("user") ?? "";

  let decodedToken = null;

  if (token) {
    try {
      decodedToken = jwtDecode(token);
    } catch (error) {
      console.error("Invalid token", error);
    }
  }
  return decodedToken;
}
