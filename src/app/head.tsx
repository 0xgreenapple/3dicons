import { siteMetadata } from "../../metadata"
export default function Head() {
  
  const meta = siteMetadata;
  
  return (
    <>
      <title> {meta.title} </title>
      <meta name="author" content={meta.author.name}/>
      <meta name="description" content={meta.description}/>
      <link rel="shortcut icon" href={meta.options.icon}/>
      
      <meta property="og:title" content={meta.options.name}/>
      <meta property="og:url" content={meta.siteUrl}/>
      <meta property="og:description" content={meta.description}/>
      <meta property="og:image" content={meta.preview} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@yourhandle"/>
      <meta name="twitter:title" content={meta.title}/>
      <meta name="twitter:description" content={meta.description}/>
      <meta name="twitter:image" content={meta.preview}/>

    </>
  )
}
