import type { Template } from 'tinacms';

export const splitBlockSchema: Template = {
	name: 'split',
	label: 'Split (Text + Image)',
	fields: [
		{ type: 'string', label: 'Title', name: 'title' },
		{ 
			type: 'rich-text', 
			label: 'Body', 
			name: 'body',
			isBody: false,
		},
		{
			type: 'object', 
			label: 'Image', 
			name: 'image',
			fields: [
				{ name: 'src', label: 'Image Source', type: 'image' },
				{ name: 'alt', label: 'Alt Text', type: 'string' },
			],
		},
		{ type: 'boolean', label: 'Image on left', name: 'reverse' },
		{
			type: 'object', 
			label: 'Actions', 
			name: 'actions', 
			list: true,
			ui: { 
				defaultItem: { label: 'Learn more', type: 'button', link: '/' },
				itemProps: (item) => ({ label: item?.label || 'Aktion' }) 
			},
			fields: [
				{ type: 'string', label: 'Label', name: 'label' },
				{ type: 'string', label: 'Type', name: 'type', options: [{ label: 'Button', value: 'button' }, { label: 'Link', value: 'link' }] },
				{ type: 'string', label: 'Icon (Tabler name)', name: 'icon' },
				{ type: 'string', label: 'Link', name: 'link' },
			],
		},
	],
	ui: {
		defaultItem: {
			title: 'Neuer Split Block',
		},
		itemProps: (item) => ({
			label: item?.title || 'Split Block',
		}),
	},
};
