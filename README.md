# Matrix Terminal

A cyberpunk-themed chat terminal that connects to an n8n webhook backend. Built with vanilla HTML/CSS/JS — no frameworks, no build tools.

## Features

- Matrix rain animation (canvas)
- CRT scanline and vignette effects
- Typewriter effect for bot responses
- Session tracking with unique IDs
- Responsive design (mobile + desktop)

## Architecture

```
Browser → Vercel Serverless Function (/webhook) → n8n Webhook
```

The frontend sends messages to `/webhook`, which is proxied by a serverless function to the n8n backend. The n8n webhook URL is stored as an environment variable — never in the codebase.

## Local Development

```bash
python3 server.py
```

Open `http://localhost:8000`. Requires a `server.py` file (not tracked in git) with the n8n webhook URL configured.

## Deployment

Deployed on [Vercel](https://vercel.com) with automatic deploys from `main`.

### Environment Variables

| Variable | Description |
|---|---|
| `N8N_WEBHOOK_URL` | Full URL to the n8n production webhook endpoint |

## Tech Stack

- **Frontend**: HTML, CSS, vanilla JavaScript
- **Backend**: Vercel serverless function (Node.js)
- **Automation**: n8n webhook
