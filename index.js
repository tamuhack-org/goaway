import express from "express";

const app = express();
const PORT = process.env.port || 3000;

const REDIRECTS = {
    "www.nitroguy.xyz": ["https://nitroguy.xyz", 301],
    "www.thesass.xyz": ["https://thesass.xyz", 301],
    "www.naviyer.com": ["https://naviyer.com", 301],

    "thesass.xyz": ["https://nitroguy.xyz", 302],
    "naviyer.com": ["https://nitroguy.xyz", 302],
};

app.get("*", (req, res) => {
    const host = req.headers.host;
    const redirect = REDIRECTS[host];
    if (redirect) {
        const [url, status] = redirect;
        return res.redirect(status, url + req.url);
    }
    res.send("Looks like you're lost, young traveler. It's ok, we all get lost sometimes. Come, stay a while. Enjoy some time in this cozy little corner of the internet. It's a scary world out there, but you're safe here. Whenever you're ready, you can resume your journey. But for now, just relax. You're home. You're safe. You're loved. Cheers, friend. 🌌");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
