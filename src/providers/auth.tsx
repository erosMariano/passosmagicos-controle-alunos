import Router from "next/router";
import {
	ChangeEvent,
	createContext,
	FC,
	useContext,
	useEffect,
	useState,
} from "react";
import { toast } from "react-toastify";

type PropsAuth = {
	//Definindo props para login
	loginUser: { user: string; password: string };
	setLoginUser: (value: { user: string; password: string }) => void;
	setLogin: (value: boolean) => void;
	login: boolean;
	onChangeInputs: (e: ChangeEvent<HTMLInputElement>) => void;
	validateForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	logout: () => void;
};

export const AuthContext = createContext<PropsAuth>({
	//setando a forma inicial do context
	loginUser: { user: "", password: "" },
	setLoginUser: () => {},
	setLogin: () => {},
	login: false,
	onChangeInputs: (e: ChangeEvent<HTMLInputElement>) => {},
	validateForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
	logout: () => {},
});

export const AuthProvider: FC = ({ children }) => {
	const [loginUser, setLoginUser] = useState({
		//Estado que salva o email e senha do  usuario
		user: "",
		password: "",
	});
	const [login, setLogin] = useState(false);

	function onChangeInputs(e: ChangeEvent<HTMLInputElement>) {
		//pega valor do password e do login
		const { value, name } = e.target;

		setLoginUser({
			...loginUser, //pega o valor anterior dos inputs e soma com o novo
			[name]: value,
		});
	}

	//Configuração no notify
	const notify = (error: string) =>
		toast.error(error, {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	//Validação do formulário de login
	function validateForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		//verifica se a credencial é verdadeira
		e.preventDefault();

		if (
			loginUser.user === "teste@gmail.com" &&
			loginUser.password === "12345678"
		) {
			Router.push("/portal-do-aluno");
			setLogin(true);
			//Gerar um hash e salvar no localhost
			localStorage.setItem(
				"login",
				"e6d9a64e-7bda-4150-9216-fd944ac03eed"
			);
		} else if (loginUser.user !== "teste@gmail.com") {
			notify("email inválido");
		} else if (loginUser.password !== "12345678") {
			notify("Senha inválida");
		}
	}


	//Verificando se existe um hash de login
	useEffect(() => {
		if (localStorage) {
			if (localStorage.getItem("login") === "e6d9a64e-7bda-4150-9216-fd944ac03eed") {
				setLogin(true);
			}else{
				Router.router?.push("/");
			}
		}
	}, [login]);



	//Logout 
	function logout() {
		localStorage.removeItem("login");
		setLogin(false);
	}

	return (
		<AuthContext.Provider
			value={{
				setLoginUser,
				loginUser,
				setLogin,
				login,
				onChangeInputs,
				validateForm,
				logout
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
