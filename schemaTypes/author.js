import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'bookingProviderType',
      title: 'Booking Provider',
      description: 'Select your Meeting Provider',
      type: 'string',
      options: {
        list: [
          {title: 'Calendly', value: 'Calendly'},
          {title: '10to8', value: '10to8'},
        ],
      },
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Booking URL',
      description: 'Calendly: Booking Link || 10to8: Widget ID (Without "TTE-")',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
