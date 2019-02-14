export const routePaths = {
	home: '/',
	login: '/login',
	register: '/register',
	notFound: '/NotFound',
	ad: {
		create: '/Ad/Create',
		edit: (id: string = ':id') => `/Ad/Edit/${id}`,
		view: (id: string = ':id') => `/Ad/View/${id}`,
	},
};
