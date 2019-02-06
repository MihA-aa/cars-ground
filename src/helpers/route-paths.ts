export const routePaths = {
	home: '/',
	login: '/login',
	register: '/register',
	adCreate: '/Ad/Create',
	notFound: '/NotFound',
	adEdit: (id: string = ':id') => `/Ad/Edit/${id}`,
	adView: (id: string = ':id') => `/Ad/View/${id}`,
};
