export default function Copyright() {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-neutral-500">
                Copyright © {new Date().getFullYear()} EasyRSS
            </p>
        </div>
    )
}