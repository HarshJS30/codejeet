export default async function handler(req, res) {
  const { path } = req.query;
  const API_KEY = process.env.API_KEY;  // We'll set this in Vercel
  
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/${path}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}