'use client'
import { RouterName } from '@/enums/router';
import { useSession, SessionProvider } from 'next-auth/react';
import Link from 'next/link';

export default function HeaderUser() {
    const session = useSession()
    return (
        <SessionProvider>
            <div>
                {
                    session ?
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                <span>{session?.data?.user?.email?.charAt(0).toUpperCase()}</span>
                            </div>
                        </div>
                        :
                        <Link href={RouterName.LOGIN}>
                            <button className='btn btn-sm btn-primary'> Login </button>
                        </Link>
                }
            </div>
        </SessionProvider>
    )
}