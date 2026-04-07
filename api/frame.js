module.exports = (req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`
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

  if (req.method === "POST") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://picsum.photos/600/400?text=Success" />
        </head>
      </html>
    `);
  }
};