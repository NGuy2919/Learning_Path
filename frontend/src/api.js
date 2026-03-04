const API = import.meta.env.VITE_API_URL

export async function getHealth() {
  const res = await fetch(`${API}/api/health`)
  return res.json()
}