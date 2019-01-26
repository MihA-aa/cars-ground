const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const asyncValidate = (values: any /*, dispatch */) => {
	return sleep(1000).then(() => {
		if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
			throw { username: 'That username is taken' };
		}
	});
};
