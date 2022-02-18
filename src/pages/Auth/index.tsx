import googleIcon from './images/google-icon.svg';
import githubIcon from './images/github-icon.svg';
import illustrationImg from './images/developer.svg';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';

export function Login() {
	const navigate = useNavigate();
	const { user, signInWithGoogle, signInWithGithub } = useAuth();

  async function handleLoginWithGoogle() {
    if(!user) {
      await signInWithGoogle();
    }

    navigate('/home');
  }
  
  async function handleLoginWithGithub() {
    if(!user) {
      await signInWithGithub();
    }

    navigate('/home');
    
  }

  return (
    <div className="flex flex-row h-full p-24">      
      <aside className="w-1/2 flex flex-col gap-12 items-center justify-center p-10">
        <img src={illustrationImg} alt="Ilustração ilustrativa" />        
        <h1 className="text-3xl font-bold text-center px-10">Faça seu login na plataforma</h1>
      </aside>
      <main className="w-1/2 flex flex-col gap-12 items-center justify-center">
        <Logo />
        <div className="w-2/3 min-h-1/3 gap-2 flex flex-col items-center justify-center p-10 bg-gray-eli-2 rounded-md">
          <span className="pb-4 text-purple-eli-4 font-bold">ENTRAR COM</span>
          <Button onClick={handleLoginWithGoogle}>
            <img width="20px" src={googleIcon} alt="Sign in with Google"/>
            Google
          </Button>
          <Button onClick={handleLoginWithGithub}>
            <img width="30px" src={githubIcon} alt="Sign in with GitHub"/>
            GitHub
          </Button>
        </div>
      </main>
    </div>
  );
}