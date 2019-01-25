import React from 'react';

// import { Header } from './header';
// import { Footer } from './footer';
import { Layout as AntdLayout, Breadcrumb, Button } from 'antd';
import { Styled } from '../../styles/styled';

const { Header, Content, Footer } = AntdLayout;

export class Layout extends React.Component {
	render = () => (
		<AntdLayout className='layout'>
			<Header style={{ backgroundColor: '#1e88e5', display: 'flex' }}>
				<h2>
					<Styled.Link to=''>Cars Ground</Styled.Link>
				</h2>
				<Styled.Link to='login' style={{ position: 'absolute', right: '10px', top: '15px' }}>
					Login
				</Styled.Link>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>© 2019 Mihail Ermolaev</Footer>
		</AntdLayout>
	);
}
