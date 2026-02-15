export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    return res.status(500).json({ error: 'Webhook URL not configured' });
  }

  try {
    const { message, sessionId } = req.body;
    const params = new URLSearchParams({ message, sessionId });
    const url = `${webhookUrl}?${params}`;

    const response = await fetch(url, { method: 'GET' });
    const contentType = response.headers.get('content-type') || '';
    const body = await response.text();

    res.status(response.status);
    res.setHeader('Content-Type', contentType || 'application/json');
    res.send(body || JSON.stringify({ output: 'Message received' }));
  } catch (err) {
    res.status(502).json({ error: 'Failed to reach webhook' });
  }
}
