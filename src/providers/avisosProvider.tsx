import {
	createContext,
	FC,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
export const informacoes: {
	title: string;
	message: string;
	lido: boolean;
}[] = [
	{
		title: "",
		message: "",
		lido: false,
	},
];

type PropsAvisos = {
	avisos: {
		title: string;
		message: string;
		lido: boolean;
	}[];

	avisoLido: () => void;
};

export const AvisosContext = createContext<PropsAvisos>({
	avisos: [{ title: "", message: "", lido: false }],
	avisoLido: () => {},
});

export const AvisosProvider: FC = ({ children }) => {
	const [avisos, setAvisos] = useState([
		{
			title: "",
			message: "",
			lido: false,
		},
	]);

	useEffect(() => {
		setAvisos([
			{
				title: "Seja bem-vindo!",
				message:
					"Querido aluno, que no decorrer deste ano você seja como uma árvore, que juntos possamos semear conhecimento e, ao final, colhermos frutos dessa parceria de sucesso. Seja bem-vindo!",
				lido: false,
			},
		]);
	}, []);

	const avisoLido = useCallback(() => {
		avisos.map((element) => {
			element.lido = true;
		});
	}, [avisos]);

	return (
		<AvisosContext.Provider value={{ avisos, avisoLido }}>
			{children}
		</AvisosContext.Provider>
	);
};

export const useAvisos = () => useContext(AvisosContext);
