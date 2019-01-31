import styled from 'styled-components';
import { Layout as AntdLayout } from 'antd';

const { Header: AntdHeader, Content: AntdContent, Footer: AntdFooter } = AntdLayout;

const RightMenu = styled.div`
	&& {
		position: absolute;
		right: 50px;
	}
`;

const Header = styled(AntdHeader)`
	&& {
		background-color: #1e88e5;
		display: flex;
	}
`;

const Body = styled(AntdContent)`
	&& {
		padding: 0 50px;
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
};
