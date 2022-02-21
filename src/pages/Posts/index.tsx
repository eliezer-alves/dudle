import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { usePost } from "../../hooks/usePost";
import { database } from '../../services/firebase';
import { Button } from "../../components/Button";
import { Page } from "../../components/Page";
import { Post } from "../../components/Post";

export function Posts() {
  const { user } = useAuth();
  const [newPost, setNewPost] = useState('');
  const [newPostTitle, setNewPostTitle] = useState('');
  const { posts } = usePost();

  async function handleSendPost(e: FormEvent) {
		e.preventDefault()

		if (newPost.trim() === '') {
			return;
		}

    if (!user) {
			alert('You must be logged in.');
			throw new Error('You must be logged in.')
		}

    const post = {
			title: newPostTitle,
      post: newPost,
			author: {
        userId: user.id,
				name: user.name,
				avatar: user.avatar,
			}
		}

		await database.ref(`posts/`).push(post);
		setNewPostTitle('');
		setNewPost('');
  }

  return (
    <Page>
      <div className="flex gap-16">
        <section className="w-1/4 p-10 flex flex-col items-center justify-center gap-6 bg-gray-eli-2 rounded-md" style={{height:'300px'}}>
          <img className="rounded-full w-40 h-40" src={user?.avatar} alt="" />
          <h3 className="text-xl font-bold">{user?.name}</h3>
        </section>
        <main className="w-3/4 flex flex-col gap-16 overflow-visible">
          <div>
            <h1 className="text-2xl font-bold">Novo Post</h1>
            <section className="mt-4 p-10 flex flex-col gap-4 bg-gray-eli-2 rounded-md">
              <form onSubmit={handleSendPost} className="w-full flex flex-col gap-2">
                <input              
                  placeholder="Título"
                  type="text" value={newPostTitle}
                  onChange={e => setNewPostTitle(e.target.value)}
                  required
                  className="w-full input-eli"
                />
                <textarea
                  placeholder="..."
                  rows={5}
                  value={newPost}
                  onChange={e => setNewPost(e.target.value)}
                  required
                  className="w-full input-eli"
                />
                <div className="form-footer py-2">
                  <Button type="submit" disabled={!user}>Enviar Post</Button>
                </div>
              </form>
            </section>
          </div>

          <section>
            <h1 className="text-2xl font-bold">Meus Posts</h1>
          {
            posts.map((post, index) => {
              return (
                <>
                  <Post
                    id={post.id}
                    author={post.author}
                    title={post.title}
                    post={post.post}
                  >
                  </Post>
                  {posts[index+1] && (<div className="separator">+</div>)}
                </>
              )
            })
          }
          </section>
          </main>
      </div>
    </Page>
  )
}