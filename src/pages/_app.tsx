import "../styles/style.scss"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  let header = (
    <>
      <div className="announce-wrapper producthunt"></div>
    </>
  )
  return (
    <SessionProvider session={session}>
      {/* <div id="root" className="3dicons-main">
        <header>{header}</header>
        <main>
        </main>
        <div className="ph-float">
          <a
            href="https://www.producthunt.com/posts/3dicons?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-3dicons"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=315795&theme=dark&period=daily"
              alt="3dicons - Open source 3D icon library with over 1440+ icons | Product Hunt"
            />
          </a>
        </div>

        <div className="ad-float"></div>
      </div> */}
      <Component {...pageProps} />
    </SessionProvider>
  )
}

