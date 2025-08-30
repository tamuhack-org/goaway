import express from "express";

const app = express();
const PORT = process.env.port || 3000;

const REDIRECTS = {
    // .org -> .com
    "register.tamuhack.org": ["https://register.tamuhack.com", 301],

    // .com -> .org
    "tamuhack.com": ["https://tamuhack.org", 301],
    "www.tamuhack.com": ["https://tamuhack.org", 301],
    "dev.tamuhack.com": ["https://dev.tamuhack.org", 301],
    "helpr.tamuhack.com": ["https://helpr.tamuhack.org", 301],
    "help.tamuhack.com": ["https://helpr.tamuhack.org", 301],
    "hh23.tamuhack.com": ["https://hh23.tamuhack.org", 301],
    "hh24.tamuhack.com": ["https://hh24.tamuhack.org", 301],
    "hh25.tamuhack.com": ["https://hh25.tamuhack.org", 301],
    "hoot.tamuhack.com": ["https://hoot.tamuhack.org", 301],
    "slither.tamuhack.com": ["https://slither.tamuhack.org", 301],
    "team.tamuhack.com": ["https://team.tamuhack.org", 301],
    "x.tamuhack.com": ["https://x.tamuhack.org", 301],
    "th25.tamuhack.com": ["https://th25.tamuhack.org", 301],

    // .org -> .org
    "www.tamuhack.org": ["https://tamuhack.org", 301],
    "help.tamuhack.org": ["https://helpr.tamuhack.org", 301],
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
