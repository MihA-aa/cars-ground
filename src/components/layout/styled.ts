import styled from 'styled-components';
import { Layout as AntdLayout } from 'antd';
import { Styled as CommonStyled } from '../../styles/styled';

const { Header: AntdHeader, Content: AntdContent, Footer: AntdFooter } = AntdLayout;

const RightMenu = styled.div`
	&& {
		position: absolute;
		right: 50px;
	}
`;

const RightMenuLink = styled(CommonStyled.Link)`
	margin-left: 30px;
`;

const Header = styled(AntdHeader)`
	&& {
		background-color: #1e88e5;
		display: flex;
	}
`;

const Body = styled(AntdContent)`
	&& {
		padding: 0 200px;
	}
`;

const Content = styled.div`
	background: #fff;
	padding: 24px;
	min-height: 280px;
`;

const Footer = styled(AntdFooter)`
	&& {
		text-align: center;
	}
`;

const PageHeader = styled.h2`
	margin: 16px 0;
`;

export const Styled = {
	RightMenu,
	Header,
	PageHeader,
	Body,
	Content,
	Footer,
	RightMenuLink,
};
