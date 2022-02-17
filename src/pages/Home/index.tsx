import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function Home() {  
	const navigate = useNavigate();
  const { user, logout } = useAuth();

  async function handleLogout() {
    await logout();
    navigate('/');
  }
  return (
    <>
      <h1>Olá {user?.name}</h1>
      {user?.google && (
        <span> você está logado com Google</span>
      )}
      <button onClick={handleLogout}>Sair daqui</button>
    </>
  );
}