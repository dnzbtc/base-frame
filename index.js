const express = require("express");
const { ethers } = require("ethers");

const app = express();
app.use(express.json());

const CONTRACT_ADDRESS = "0xd2a6e64BBF4Ea24cbD604a358AdcE811F68f8340";
const RPC_URL = "https://mainnet.base.org";

const ABI = [
  "function checkIn() external"
];

const PRIVATE_KEY = "0xcc06816219120432447193907d9ca27d751a81ffc09cfd601eb03f4eafda9104";

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Base Check-In" />
        <meta property="og:image" content="https://picsum.photos/600/400" />

        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://picsum.photos/600/400" />
        <meta property="fc:frame:button:1" content="Check In" />
        <meta property="fc:frame:post_url" content="https://taylor-progestational-heartenedly.ngrok-free.dev/action" />
      </head>
      <body></body>
    </html>
  `);
});

app.post("/action", async (req, res) => {
  try {
    const tx = await contract.checkIn();
    await tx.wait();

    res.send(`
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://placehold.co/600x400?text=Success" />
      </head>
    </html>
    `);
  } catch (err) {
    res.send(`
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://placehold.co/600x400?text=Error" />
      </head>
    </html>
    `);
  }
});

app.listen(3000, () => console.log("Server running"));
app.post("/action", async (req, res) => {
  res.json({
    type: "frame",
    frameUrl: "https://taylor-progestational-heartenedly.ngrok-free.dev"
  });
});
