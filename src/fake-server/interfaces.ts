export type ApiResponse<T = {}> = T & {
	errors?: { [field: string]: string; error: string };
};

export interface LoginResultModel {
	userId: number;
	firstName: string;
	secondName: string;
	isAdmin: boolean;
}

export type LoginResponse = ApiResponse<LoginResultModel>;
