import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Raven Duffy | Web Designer and Computer Scientist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='mainContainer'>
          <div className='intro'>
            <h1>Hi, I'm <b>Raven</b></h1>
            <h2><b>Web Designer</b> and <b>Computer Scientist</b></h2>
          </div>
        </div>
        <div className='profile'>
            <Image src='/images/me_face.png' alt='profile' layout='intrinsic' width={700} height={875} />
          </div>
      </main>
    </>
  )
}
