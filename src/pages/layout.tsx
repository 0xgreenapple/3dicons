import '../styles/style.scss';


// root layout
export default function RootLayout(
    {children}: {children: React.ReactNode;}) 
{
  let header = (
      <>
      <div className="announce-wrapper producthunt">
      </div>
      </>
  )
  return (
    <html lang="en">
      <body>
          <div id="root" className="3dicons-main">
            <header>{header}</header>
            <main>{children} </main>
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
          </div>
      </body>
    </html>
  )
}
