import styled from 'styled-components';
import { List, Row as ARow } from 'antd';

const Item = styled(List.Item)`
	&& {
		border-bottom: 1px solid #e8e8e8;
		margin-bottom: 10px;
		margin-top: -10px;
	}
`;

const Row = styled(ARow)`
	&& {
		border-bottom: 1px solid #e8e8e8;
		margin-bottom: 15px;
		padding-bottom: 20px;
	}
`;

export const Styled = {
	Item,
	Row,
};
