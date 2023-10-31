'use client'
import { signIn } from 'next-auth/react'
export default function Login() {
	return <button className="tx-sm" onClick={() => signIn()}></button>
}
