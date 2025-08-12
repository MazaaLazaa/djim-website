import { ImageResponse } from 'next/og'

export async function GET() {
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
          flexWrap: 'nowrap',
        }}
      >
        <h1
          style={{
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            color: 'white',
            margin: '0 30px',
            whiteSpace: 'pre-wrap',
          }}
        >
          My Portfolio
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
