import { useEffect, useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

type FirebasePosts = Record<string, {
	author: {
		userId: string;
		name: string;
		avatar: string;
	};
	title: string;
	post: string;
}>;

type PostType =  {
	id: string,
	author: {
		userId: string;
		name: string;
		avatar: string;
	};
  title: string;
  post: string;
};

export function usePost() {
	const { user } = useAuth();
 	const [posts, setPosts] = useState<PostType[]>([]);

	useEffect(() => {
		const postRef = database.ref('posts');

		postRef.on('value', post => {
			const databasePost = post.val();
			const firebasePosts: FirebasePosts = databasePost ?? {};
			const parsedPosts = Object.entries(firebasePosts).map(([key, value]) => {
				return {
					id: key,
					title: value.title,
					post: value.post,
					author: value.author
				}
			});

			setPosts(parsedPosts);
		});

		return () => {
			postRef.off('value');
		}
	}, [user?.id]);

	return { posts }
}