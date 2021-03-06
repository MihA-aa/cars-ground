import styled from 'styled-components';
import { Layout as AntdLayout } from 'antd';
import { Styled as CommonStyled } from '../../styles/styled';

const { Header: AntdHeader, Content: AntdContent, Footer: AntdFooter } = AntdLayout;

interface ContentProps {
	isLoading: boolean;
}

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

const ContentWrapper = styled.div`
	background: #fff;
	padding: 24px;
	min-height: 400px;
	display: flex;
`;

const Content = styled.div<ContentProps>`
	flex: 1;
	display: ${(props) => (props.isLoading ? 'none' : 'block')};
`;

const Footer = styled(AntdFooter)`
	&& {
		text-align: center;
	}
`;

const Layout = styled(AntdLayout)`
	&& {
		min-height: 100vh;
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
	Layout,
	ContentWrapper,
};
