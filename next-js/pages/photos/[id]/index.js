import Image from 'next/image'
import Link from 'next/link';

const index = ({photo}) => {
    const { title, url } = photo;
    return (
        <div>
            <h2>image {title}</h2>
            <Image src={url} width={500} height={400} alt={title} />
            <Link href="/photos">
                <a>Go Back</a>
            </Link>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/1`)
    const photo = await res.json();
    return {
      props: {
        photo
      }
    }
}
export const getStaticPath = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?start=0&_end=10`)
    const photos = await res.json();
    const ids = photos.map(photo => photo.id);
    const paths = ids.map((id) => ({
        params: { id: id.toString() },
      }))
    
    return { paths, fallback: false }
}
export default index;