import { useAuth } from "../../hooks/useAuth";
import { Page } from "../../components/Page";
import { Button } from "../../components/Button";
import { useState } from "react";

export function Posts() {
  const { user } = useAuth();
  const [newPost, setNewPost] = useState('');
  const [newPostTitle, setNewPostTitle] = useState('');

  function handleSendPost() {
    return '';
  }

  return (
    <Page>
      <div className="flex gap-16">
        <section className="w-1/4 p-10 flex flex-col items-center justify-center gap-6 bg-gray-eli-2 rounded-md">
          <img className="rounded-full w-40 h-40" src={user?.avatar} alt="" />
          <h3 className="text-xl font-bold">{user?.name}</h3>
        </section>
        <main className="w-3/4">
          <section className="p-10 flex flex-col gap-4 bg-gray-eli-2 rounded-md">
            <h1 className="text-2xl font-bold">Novo Post</h1>
            <form onSubmit={handleSendPost} className="w-full flex flex-col gap-2">
              <input              
                placeholder="Título"
                className="w-full input-eli"
                type="text" value={newPostTitle}
                onChange={e => setNewPostTitle(e.target.value)}
              />
              <textarea
                placeholder="..."
                rows={5}
                value={newPost}
                onChange={e => setNewPost(e.target.value)}
                className="w-full input-eli"
              />
              <div className="form-footer py-2">
                <Button type="submit" disabled={!user}>Enviar Post</Button>
              </div>
            </form>
          </section>
          </main>
      </div>
    </Page>
  )
}