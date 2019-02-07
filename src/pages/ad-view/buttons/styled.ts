import styled from 'styled-components';
import { Button } from 'antd';

const EditButton = styled<any>(Button).attrs({ icon: 'edit' })``;

const RemoveButton = styled<any>(Button).attrs({ type: 'danger', icon: 'delete' })`
	margin-left: 10px;
`;

const Buttons = styled.div`
	float: right;
`;

export const Styled = {
	RemoveButton,
	EditButton,
	Buttons,
};
