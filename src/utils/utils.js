import jwtDecode from "jwt-decode";
import { getCookie } from ".";

export const user = jwtDecode(getCookie("user"));
