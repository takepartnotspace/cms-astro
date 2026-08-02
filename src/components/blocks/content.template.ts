import type { Template } from 'tinacms';

export const contentBlockSchema: Template = {
  name: 'content',
  label: 'Content',
  fields: [
    { 
      type: 'rich-text', 
      label: 'Body', 
      name: 'body',
      templates: [
        {
          name: 'Tooltip',
          label: 'Tooltip / Erklärung',
          inline: true,
          fields: [
            {
              name: 'text',
              label: 'Text',
              type: 'string',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  ui: {
    defaultItem: {
      body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.',
    },
  },
};