import { CollectionConfig } from 'payload/types'

const Projects: CollectionConfig = {
    slug: 'projects',
    auth: true,

    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'desc',
            type: 'richText',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },

    ],
}

export default Projects
