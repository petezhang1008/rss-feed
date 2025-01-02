import Copyright from "./copyright";
import FooterLinks from "./footer-links";
import FooterLogo from "./footer-logo";

export default function Footer() {
    return (
        <div className="flex flex-col size-full bg-neutral-800 p-8 gap-8">
            <FooterLogo />
            <FooterLinks />
            <Copyright />
        </div>
    )
}