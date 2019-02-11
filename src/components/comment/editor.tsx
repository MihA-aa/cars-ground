import React from 'react';
import { Form, Button, Input } from 'antd';

const TextArea = Input.TextArea;

interface EditorProps {
	value: string;
	submitting: boolean;
	onSubmit: () => void;
	onChange: (e: any) => void;
}

export const Editor: React.FC<EditorProps> = ({ onChange, onSubmit, submitting, value }) => (
	<div>
		<Form.Item>
			<TextArea rows={4} onChange={onChange} value={value} />
		</Form.Item>
		<Form.Item>
			<Button type='primary' htmlType='submit' loading={submitting} disabled={!value} onClick={onSubmit}>
				Add Comment
			</Button>
		</Form.Item>
	</div>
);
