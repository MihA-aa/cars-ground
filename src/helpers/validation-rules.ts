export const requiredNamed = (name: string) => (value: string) =>
	value && value.trim() ? undefined : `${name} is required.`;

export const required = (value: number) =>
	value || value === 0 ? undefined : `Field is required.`;

export const onlyNumber = (value: number) => (isNaN(value) ? `Field for numbers only.` : undefined);

export const maxLengthNamed = (name: string, max: number) => (value: string) =>
	value && value.length > max ? `${name} cannot be longer than ${max} characters.` : undefined;

export const minLengthNamed = (name: string, min: number) => (value: string) =>
	value && value.length < min ? `${name} cannot be shorter than ${min} characters.` : undefined;
