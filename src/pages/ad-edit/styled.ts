import styled from 'styled-components';
import { Form as AForm, Button } from 'antd';

const Form = styled(AForm)`
	&& {
		max-width: 500px;
		min-width: 250px;
		margin: 20px 200px;
	}
`;

const SubmitButton = styled<any>(Button).attrs({ type: 'primary', htmlType: 'submit' })`
	&& {
		margin-right: 10px;
	}
`;

export const Styled = {
	Form,
	SubmitButton,
};
