'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

function AuthButton() {
	const { data: session } = useSession()

	if (session) {
		return (
			<div className="flex items-center bg-white text-sky-500">
				{session?.user?.name}
				<button onClick={() => signOut()}>Sign Out</button>
			</div>
		)
	}
	return (
		<>
			Not Signed In from the Var
			<button onClick={() => signIn()}>Sign in</button>
		</>
	)
}

export default function NavMenu() {
	return (
		<div>
			<AuthButton />
		</div>
	)
}
