import { ReactNode } from "react"

type PostProps = {
  id: string,
	author: {
		userId: string;
		name: string;
		avatar: string;
	};
  title: string;
  post: string;
  children?: ReactNode;
}
export function Post({ id, author, title, post, children }: PostProps) {
  return (
    <div className="mt-4 p-10 flex flex-col gap-2 bg-gray-eli-2 rounded-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <span>{post}</span>
    </div>
  )
}