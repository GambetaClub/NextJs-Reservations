import { getServerSession } from 'next-auth'
import WhoAmIButton from './whoAmIButton'
import { authOptions } from '../api/auth/[...nextauth]/options'

export default async function ServerActionPage() {
	const whoAmI = async () => {
		'use server'
		const session = await getServerSession(authOptions)
		console.log(session)
		return session?.user?.name || 'Not logged in'
	}

	return (
		<div>
			<WhoAmIButton whoAmIAction={whoAmI}></WhoAmIButton>
		</div>
	)
}
