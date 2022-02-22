import { useEffect, useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

type FirebasePosts = Record<string, {	
	title: string;
	post: string;
	author: {
		userId: string;
		name: string;
		avatar: string;
	};
	createdAt: string;
}>;

type PostType =  {
	id: string,
  title: string;
  post: string;
	author: {
		userId: string;
		name: string;
		avatar: string;
	};
	createdAt: string;
};

export function usePost(userId: string|undefined = undefined) {
	const { user } = useAuth();
 	const [posts, setPosts] = useState<PostType[]>([]);

	useEffect(() => {
		var postRef = database.ref("posts");
		var postQuery = undefined;
		if (userId) {
			postQuery = postRef.orderByChild("author/userId").equalTo(userId);
		} else {
			postQuery = postRef;
		}		
		
		postQuery.on('value', (post) => {
			const databasePost = post.val();
			const firebasePosts: FirebasePosts = databasePost ?? {};
			const parsedPosts = Object.entries(firebasePosts).map(([key, value]) => {
				let date = new Date(value.createdAt);
				let createdAt = date.toLocaleDateString('pt-BR', {
					hour : 'numeric',
					minute : 'numeric',
				}).split(' ').join(' ');

				return {
					id: key,
					title: value.title,
					post: value.post,
					author: value.author,
					createdAt: createdAt
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