import { GetFieldDecoratorOptions } from 'antd/lib/form/Form';

export interface LoginFormFieldProps {
	isRequired: boolean;
	iconType: 'user' | 'lock';
	fieldDecorator<T extends Object = {}>(
		id: keyof T,
		options?: GetFieldDecoratorOptions,
	): (node: React.ReactNode) => React.ReactNode;
}
