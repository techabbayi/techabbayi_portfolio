import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Lokeswara Muthumula | Programmer, Cyber Activist & Founder';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0a',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          border: '4px solid #1f2937',
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: '#ef4444',
              }}
            />
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: '#eab308',
              }}
            />
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
              }}
            />
            <span
              style={{
                marginLeft: '16px',
                color: '#4ade80',
                fontSize: '22px',
                fontFamily: 'monospace',
                fontWeight: 700,
              }}
            >
              ~/lokeswara.muthumula // techabbayi
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              padding: '8px 16px',
              borderRadius: '9999px',
              border: '1px solid #4ade80',
              color: '#4ade80',
              fontSize: '18px',
              fontFamily: 'monospace',
            }}
          >
            VERIFIED_PORTFOLIO
          </div>
        </div>

        {/* Center Main Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Lokeswara Muthumula
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#4ade80',
              fontWeight: 600,
              fontFamily: 'monospace',
            }}
          >
            Programmer • Cyber Activist • Founder
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#9ca3af',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Founder of AKMULTIVISION Multimedia Services • Creator of Sr Digital Telugu • Building Autonomous AI Systems &amp; Privacy-First Architecture.
          </div>
        </div>

        {/* Footer Badges */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #27272a',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', color: '#a1a1aa', fontSize: '20px', fontFamily: 'monospace' }}>
            <span>&gt; FoundrAI</span>
            <span>&gt; LawPilot AI</span>
            <span>&gt; IntraQuiz AI</span>
            <span>&gt; NeoShieldX</span>
          </div>
          <div style={{ color: '#4ade80', fontSize: '20px', fontFamily: 'monospace' }}>
            techabbayi.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

