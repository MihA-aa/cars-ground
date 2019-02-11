export type ApiResponse<T = {}> = T & {
	errors?: { [field: string]: string; error: string };
};

export interface UserData {
	token: string;
	userId: number;
	firstName: string;
	secondName: string;
	isAdmin: boolean;
}

export interface CommentModel {
	userId: number;
	adId: number;
	text: string;
	dateTime: string;
}

export interface LoginValidateModel {
	token: string;
}

export type UserSessionResponse = ApiResponse<UserData>;

export type LoginValidateResponse = ApiResponse<LoginValidateModel>;
