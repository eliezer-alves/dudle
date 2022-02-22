import { ReactNode } from "react"

type PostProps = {
  id: string,
  title: string;
  post: string;
	author: {
		userId: string;
		name: string;
		avatar: string;
	};
  createdAt: string;
  children?: ReactNode;
}
export function Post({ id, title, post, author, createdAt, children }: PostProps) {
  console.log(createdAt);
  
  return (
    <div className="mt-4 p-10 pt-5 flex flex-col gap-4 bg-gray-eli-2 rounded-md">
      <div className="mb-5 flex justify-between items-end">
        <span className="flex items-end gap-4">
          <img src={author.avatar} alt="Author of the post" className="rounded-full w-12 h-12"/>
          {author.name}
        </span>
        <span>{createdAt}</span>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <span>{post}</span>
    </div>
  )
}