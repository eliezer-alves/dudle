import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ ...props }: ButtonProps) {
	return (
		<button
			className="w-full py-4 px-6 flex items-center justify-center gap-2 bg-gray-eli-1 rounded-md text-xl font-bold hover:bg-purple-eli-4"
			{...props}
		></button>
	)
}