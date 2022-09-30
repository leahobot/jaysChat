import React, {useState, useEffect, useContext} from "react";
import {auth} from "../firebase";
import {useHistory} from "react-router-dom";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setLoading(false);
			setUser(user);
			if (user) {
				history.replace("/chats");
			}
		});
	}, [user, history]);

	const value = {user};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
