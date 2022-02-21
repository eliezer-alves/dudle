import { useAuth } from '../../hooks/useAuth';
import millenniumIcon from './images/millennium-icon.svg';

export function Logo() {
  const { handleNavigate } = useAuth();

  return (
    <div onClick={ () => handleNavigate('home')} className="flex items-center justify-start gap-4 py-1 px-2 link-eli">
      <img src={millenniumIcon} alt="System incon" />
      <span style={{fontFamily: 'Orbitron'}} className="text-3xl font-bold">millennium</span>
    </div>
  )
}