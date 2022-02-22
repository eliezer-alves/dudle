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
    <div className="mt-4 p-10 flex flex-col gap-4 bg-gray-eli-2 rounded-md">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span>{createdAt}</span>
      </div>
      <span>{post}</span>
    </div>
  )
}