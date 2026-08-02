import type { Template } from 'tinacms';

export const mitwirkendeBlockSchema: Template = {
  name: 'mitwirkende',
  label: 'Mitwirkende / Unterzeichner',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Titel',
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Untertitel / Akzent',
    },
    {
      type: 'string',
      name: 'description',
      label: 'Eingangstext',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'object',
      name: 'supporters',
      label: 'Unterzeichner',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.name ? `${item.name} (${item?.role || ''})` : 'Neuer Unterzeichner' };
        },
      },
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Name',
        },
        {
          type: 'string',
          name: 'role',
          label: 'Beruf / Zusatz',
        },
        {
          type: 'image',
          name: 'image',
          label: 'Portraitbild',
        },
      ],
    },
  ],
};