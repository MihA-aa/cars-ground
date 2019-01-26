import styled from 'styled-components';
import { Form as FormComponent, Icon as IconComponent, Button } from 'antd';

const Form = styled(FormComponent)`
	&& {
		max-width: 340px;
		margin: 100px auto;
		border-radius: 2px;
		border: 1px solid rgb(235, 237, 240);
		padding: 20px;
	}
`;

const Icon = styled(IconComponent)`
	color: rgba(0, 0, 0, 0.25);
`;

const LoginFormButton = styled<any>(Button).attrs({ type: 'primary', htmlType: 'submit' })`
	width: 100%;
`;

export const Styled = {
	Form,
	Icon,
	LoginFormButton,
};
