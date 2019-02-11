import React from 'react';
import { requiredNamed } from '../../helpers/validation-rules';
import { Styled } from './styled';

export const fields = {
	userName: 'userName',
	userNameLabel: 'User name',
	password: 'password',
	passwordLabel: 'Password',
	rememberMe: 'rememberMe',
	rememberMeLabel: 'Remember me',
};

export const userNameValidate = [requiredNamed(fields.userNameLabel)];
export const passwordValidate = [requiredNamed(fields.passwordLabel)];

export const icon = (iconType: 'user' | 'lock') => <Styled.Icon type={iconType} />;

export const checkboxStyles = { marginBottom: 0 };
