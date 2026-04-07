export default function handler(req, res) {
  res.status(200).send(`
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://picsum.photos/600/400" />
        <meta property="fc:frame:button:1" content="Check In" />
        <meta property="fc:frame:post_url" content="https://base-frame-neon.vercel.app/api/frame" />
      </head>
    </html>
  `);
}