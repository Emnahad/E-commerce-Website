import sanityclient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityclient({
    projectId: 'ujkqijiw',
    dataset: 'production',
    apiVersion: '2023-04-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);