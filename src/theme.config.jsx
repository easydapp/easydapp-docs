import { useConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  banner: {
    content: '',
  },
  footer: {
    content: '©EasyDapp Inc. All rights reserved.'
  },
  feedback: null,
  toc: false,
  editLink: null,
  // faviconGlyph: 'https://easydapp.ai/favicon/favicon.svg',
  // favicon: 'https://easydapp.ai/favicon/favicon.svg',
  logo: (
    <>
      <span className="_font-extrabold">Easydapp</span>
      <span className="_ml-2 max-md:_hidden _font-normal _text-gray-600">Next-Gen No-Code Platform for Blockchain App Building</span>
    </>
  ),
  head: function useHead() {
    const config = useConfig()
    const title = `${config.title} – Decitor`
    const description =
      config.frontMatter.description || 'Decitor'
    const image = config.frontMatter.image || ''

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />


      </>
    )
  }
}
