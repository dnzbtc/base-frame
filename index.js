export default async function handler(req, res) {

  if (req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(`
      <html>
        <head>
          <meta property="og:title" content="Base Check-In" />
          <meta property="og:image" content="https://picsum.photos/600/400" />

          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://picsum.photos/600/400" />
          <meta property="fc:frame:button:1" content="Check In" />
          <meta property="fc:frame:post_url" content="https://base-frame-neon.vercel.app/api" />
        </head>
      </html>
    `);
  }

  if (req.method === "POST") {
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(`
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://picsum.photos/600/400?text=Success" />
        </head>
      </html>
    `);
  }
}