export interface CommentsProps {
	avatar: string;
	comments: CommentData[];
	submitting: boolean;
	isAuth: boolean;
	submit: (value: string) => void;
}

export interface CommentData {
	author: string;
	avatar: string;
	text: string;
	datetime: string;
}
