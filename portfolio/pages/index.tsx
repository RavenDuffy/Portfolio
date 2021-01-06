import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Raven Duffy | Web Designer and Computer Scientist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='intro'>
          <h1>Hi, I'm <b>Raven</b></h1>
          <h2><b>Web Designer</b> and <b>Computer Scientist</b></h2>
        </div>
      </main>
    </>
  )
}
