import { useAuth } from '../../hooks/useAuth';
import { usePost } from "../../hooks/usePost";

import { Page } from '../../components/Page';
import { Button } from '../../components/Button';
import { Post } from '../../components/Post';

export function Home() {
  const { user } = useAuth();
  const { posts } = usePost();
  
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
        <main className="flex gap-16">
          {user && (
            <section style={{height:'360px'}} className="w-1/4 p-10 flex flex-col justify-center items-center gap-4 bg-gray-eli-2 rounded-md">
              <img className="rounded-full w-32 h-32" src={user.avatar} alt="" />
                <h3 className="text-xl font-bold">Meu perfil</h3>
                <span>Trexto inútil só pra não ficar vazio</span>
                <Button>ver perfil</Button>
            </section>
          )}
          <section className="w-3/4">
            <h1 className="text-2xl font-bold">Posts</h1>
            {
              posts.map((post, index) => {
                return (
                  <>
                    <Post
                      id={post.id}
                      title={post.title}
                      post={post.post}
                      author={post.author}
                      createdAt={post.createdAt}
                    >
                    </Post>
                    {posts[index+1] && (<div className="separator">+</div>)}
                  </>
                )
              })
            }
            </section>
        </main>
      </Page>
    </>
  );
}