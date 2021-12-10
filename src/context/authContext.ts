import { createContext } from 'react';

interface IContext {
    token: string,
    userId: string,
    login: (jwtTotken: any, id: any) => void,
    logout: () => void,
}

function noop() { }
export const AuthContext = createContext<IContext>({
    token: "",
    userId: "",
    login: noop,
    logout: noop
});