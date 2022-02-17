import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { TopBar } from '../../components/TopBar';
import { Button } from '../../components/Button';

export function Home() {  
	const navigate = useNavigate();
  const { user, logout } = useAuth();

  async function handleLogout() {
    await logout();
    navigate('/');
  }
  return (
    <>
      <TopBar/>
      <div className="py-24 px-36 flex flex-col gap-24">
        <section className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">Olá, {user?.name.split(' ')[0]}</h1>
            <span>
              você acabou de logar com <strong>{user?.provider}</strong>
            </span>
          </div>
          <button onClick={handleLogout}>Sair daqui</button>
        </section>
        {user && (
          <section className="p-10 flex justify-start gap-8 bg-gray-eli-2 rounded-md">
            <img className="rounded-full w-32 h-32" src={user.avatar} alt="" />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Meu perfil</h3>
              <span>Trexto inútil só pra não focar vazio</span>
              <Button>VISUALIZAR PERFIL</Button>
            </div>
          </section>
        )}
      </div>
    </>
  );
}