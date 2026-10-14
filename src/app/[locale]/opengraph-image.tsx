import { ImageResponse } from 'next/og';

export const alt = 'Flow Digital Lab';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 80,
                    background: '#0B1220',
                    color: '#F3F5F8',
                }}
            >
                <div style={{ fontSize: 28, color: '#7C9EFF', marginBottom: 24 }}>flowdigitallab.it</div>
                <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>Flow Digital Lab</div>
                <div style={{ fontSize: 36, color: '#A7AFBE', marginTop: 24 }}>
                    Web Design · Branding · Strategy
                </div>
            </div>
        ),
        size,
    );
}
