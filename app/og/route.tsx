import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'Next.js Portfolio Starter'

  return ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'black',
          height: '100%',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          style={{
            fontSize: 60,
            letterSpacing: '-0.025em',
            color: 'white',
            margin: '0 30px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {title}
        </h1>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}