export default function Meta({name, pageTitle, description}) {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <meta name="Raven Duffy" content="Raven Duffy's portfolio" />
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <meta property="og:url" content="http://ravenduffy.io" />
      <meta property="og:image" content="http://ravenduffy.io/images/NoBackRaven.png" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:site_name" content={name} />
      <meta property="og:see_also" content="http://ravenduffy.io" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="http://ravenduffy.io" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="http://ravenduffy.io/images/NoBackRaven.png" />
    </>
  )
}
