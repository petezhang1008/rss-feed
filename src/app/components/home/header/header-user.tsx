'use client'
import { RouterName } from '@/enums/router';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import UserAvatar from '../../user-center/user-avatar';

export default function HeaderUser() {
    const session = useSession()
    return (
        <div>
            {
                session ?
                    <UserAvatar />
                    :
                    <Link href={RouterName.LOGIN}>
                        <button className='btn btn-sm btn-primary'> Login </button>
                    </Link>
            }
        </div>
    )
}