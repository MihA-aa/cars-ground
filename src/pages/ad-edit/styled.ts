import styled from 'styled-components';
import { Form as AForm, Button, Select } from 'antd';

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

const CurrenciesPostfix = styled<any>(Select)`
	&& {
		width: 80px;
	}
`;

export const Styled = {
	Form,
	SubmitButton,
	CurrenciesPostfix,
};
