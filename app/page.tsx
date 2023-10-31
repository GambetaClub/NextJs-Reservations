import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Home() {
	const session = await getServerSession()
	console.log(session)
	return (
		<>
			getServerSession result
			{session ? (
				<h3>{session?.user?.name}</h3>
			) : (
				<h1>You shall not passed!</h1>
			)}
			<Link href="/dashboard">Go to Dashboard</Link>
		</>
	)

	return <div>Home</div>
}
