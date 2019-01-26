import styled from 'styled-components';
import { Form as FormComponent, Button } from 'antd';

const Form = styled(FormComponent)`
	&& {
		max-width: 500px;
		min-width: 200px;
		margin: 0 150px;
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
