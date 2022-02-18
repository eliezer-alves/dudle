import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { Logo } from '../Logo';
import logoutIcon from './images/logout-icon.svg';

export function TopBar() {
	const navigate = useNavigate();
  const { user, logout } = useAuth();

  async function handleLogout() {
    await logout();
    navigate('/');
  }

  return (
    <div className="w-full h-62 flex justify-between items-center bg-gray-eli-2 py-6 px-24">
      <Logo/>
      <div>
        <ul style={{fontFamily: 'Orbitron'}} className="flex gap-8">
          <li className="link-eli-2">page 1</li>
          <li className="link-eli-2">page 2</li>
          <li className="link-eli-2">page 3</li>
        </ul>
      </div>
      <img onClick={handleLogout} src={logoutIcon} alt="Sair da plataforma" className="link-eli-2"/>
    </div>
  );
}