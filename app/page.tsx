export default async function Home() {
  const res = await fetch('https://ict-6.vercel.app/api/auth')
  const data = await res.json()
  return (
    <main>
      <h1>Next.js { JSON.stringify(data) }</h1>
    </main>
  )
}
