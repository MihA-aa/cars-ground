import { Comment } from './comment';

export interface MetaData {
	avatar: string;
	stars: number;
	views: number;
	comments: Comment[];
}
