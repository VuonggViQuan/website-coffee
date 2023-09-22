import { type } from "os";
import api from "./api";
import ResponseWrapper from "./responseWrapper";

type LoginInfo = {
    id: number;
    email: string;
    password: string;
    accessToken: string;
}

const login = (email: string, password: string) => {
    const data = {email, password};
    return api.post<ResponseWrapper<LoginInfo>>(api.url.login, data)
    .then((res) => res.data);
}
const userService = {
    login,
}
export default userService;