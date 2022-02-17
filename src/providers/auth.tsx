import { createContext, useContext, useState, FC, useEffect } from "react";

type PropsAuth = {
	loginUser: { user: string; password: string };

	setLoginUser: (value: { user: string; password: string }) => void;
	setLogin: (value: boolean) => void;
    login: boolean;
};
export const AuthContext = createContext<PropsAuth>({
	loginUser: { user: "", password: "" },
	setLoginUser: () => {},
	setLogin: () => {},
    login: false,
});

export const AuthProvider: FC = ({ children }) => {
	const [loginUser, setLoginUser] = useState({
		user: "",
		password: "",
	});

	const [login, setLogin] = useState(false);

	return (
		<AuthContext.Provider
			value={{ setLoginUser, loginUser, setLogin, login }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
