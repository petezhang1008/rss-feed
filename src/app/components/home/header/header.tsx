import HeaderLogo from './header-logo';
import HeaderNavs from './header-navs';
import HeaderUser from './header-user';


export default function Header() {
    return (
        <div className="bg-white h-14 w-full justify-center flex shrink-0 shadow-sm border-b border-gray-200">
            <div className='flex justify-between max-w-[1366px] px-4 size-full items-center'>
                <HeaderLogo />
                <div className='flex items-center gap-8'>
                    <HeaderNavs />
                    <HeaderUser />
                </div>
            </div>
        </div>
    )
}