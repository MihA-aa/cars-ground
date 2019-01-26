export const requiredNamed = (value: any, allValues?: any, props?: any, name?: any) => {
	return value && value.trim() ? undefined : `${name} is required.`;
};

export const maxLengthNamed = (name: string, max: number) => (value: string) =>
	value && value.length > max ? `${name} cannot be longer than ${max} characters.` : undefined;

export const minLengthNamed = (name: string, min: number) => (value: string) =>
	value && value.length < min ? `${name} cannot be shorter than ${min} characters.` : undefined;
