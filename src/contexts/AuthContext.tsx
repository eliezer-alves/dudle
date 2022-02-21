import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebase, auth } from '../services/firebase';

type User = {
	id: string;
  provider: string;
	name: string;
	avatar: string;
}

type AuthContextType = {
	user: User | undefined;
	signInWithGoogle: () => void;
	signInWithGithub: () => void;
	logout: () => void;
	handleNavigate: (service: string) => void;
}

type AuthContextProviderProps = {
	children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
	const navigate = useNavigate();
  const [user, setUser] = useState<User>();

  const handleSetUser = (firebaseUser: any) => {
		const { displayName, photoURL, uid, providerData } = firebaseUser;

		if (!displayName || !photoURL) {
			throw new Error('Missing information from Google Account.');
		}

		setUser({
			id: uid,
      provider: providerData[0]?.providerId.split('.')[0],
			name: displayName,
			avatar: photoURL,
		});
	}

  useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				handleSetUser(user)
			}
		})

		return () => {
			unsubscribe();
		}
	}, []);

  async function signInWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider();

		const result = await auth.signInWithPopup(provider);

		if (result.user) {
			handleSetUser(result.user);
		}
	}
  
  async function signInWithGithub() {
		const provider = new firebase.auth.GithubAuthProvider();

		const result = await auth.signInWithPopup(provider);
    

		if (result.user) {
			handleSetUser(result.user)
		}
	}

	async function logout() {		
		if (window.confirm(`Tem certeza que não deseja mais continuar como ${user?.name}?`)) {			
			firebase.auth().signOut().catch(function(error) {
				alert('Houve augum problema ao efetuar seu logout! Tente novamente.');
			});
		}

		setUser(undefined);
	}

	async function handleNavigate(service: string) {
		if (user) {
			return navigate(`/${service}`);
		}

		return navigate('/');
	}

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signInWithGithub, logout, handleNavigate }}>
      {props.children}
    </AuthContext.Provider>
  )

}