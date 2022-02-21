import { useAuth } from '../../hooks/useAuth';

import { Page } from '../../components/Page';
import { Button } from '../../components/Button';

export function Home() {
  const { user } = useAuth();
  
  return (
    <>
      <Page>
        <section className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">Olá, {user?.name.split(' ')[0]}</h1>
            <span>
              você acabou de logar com <strong>{user?.provider}</strong>
            </span>
          </div>
        </section>
        {user && (
          <section className="p-10 flex justify-start gap-8 bg-gray-eli-2 rounded-md">
            <img className="rounded-full w-32 h-32" src={user.avatar} alt="" />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Meu perfil</h3>
              <span>Trexto inútil só pra não ficar vazio</span>
              <Button>VISUALIZAR PERFIL</Button>
            </div>
          </section>
        )}
      </Page>
    </>
  );
}