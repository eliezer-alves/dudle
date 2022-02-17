import googleIconImg from './images/google-icon.svg';
import githubIconImg from './images/github-icon.svg';
import illustrationImg from './images/developer.svg';

import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function Login() {
	const navigate = useNavigate();
	const { user, signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    if(!user?.google) {
      await signInWithGoogle();
    }

    navigate('/home');
  }

  return (
    <div className='flex flex-row h-full p-24'>      
      <aside className='w-1/2 flex flex-col gap-12 items-center justify-center p-10'>
        <img src={illustrationImg} alt="Ilustração ilustrativa" />
        <h1 className='text-3xl font-bold text-center px-10'>Faça seu login na plataforma</h1>
      </aside>
      <main className='w-1/2 flex items-center justify-center'>
        <div className='w-2/3 min-h-1/3 gap-2 flex flex-col items-center justify-center p-10 bg-gray-eli-2 rounded-md'>
          <span className='pb-4 text-purple-eli-4 font-bold'>ENTRAR COM</span>
          <Button onClick={handleSignInWithGoogle}>
            <img width="20px" src={googleIconImg} alt="Sign in with Google"/>
            Google
          </Button>
          <Button>
            <img width="30px" src={githubIconImg} alt="Sign in with GitHub"/>
            GitHub
          </Button>
        </div>
      </main>
    </div>
  );
}