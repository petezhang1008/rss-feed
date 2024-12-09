import HeaderLogo from './header-logo';
import HeaderUser from './header-user';


export default function Header() {
    return (
        <div className="bg-white h-14 w-full justify-center flex shrink-0 shadow-sm">
            <div className='flex justify-between max-w-[1366px] px-4 size-full items-center'>
                <HeaderLogo />
                <HeaderUser />
            </div>
        </div>
    )
}