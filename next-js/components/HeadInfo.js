import Head from 'next/head'

const HeadInfo = ({title, keyword, contents}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta keyword={keyword} />
            <meta contents={contents} />
        </Head>
    )            
}

HeadInfo.defaultprops = {
    title: 'My Blog',
    keyword: 'Blog powered by Next js',
    content: 'practice next js'
}
export default HeadInfo