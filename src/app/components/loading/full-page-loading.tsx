import styles from './styles/full-page-loading.module.scss'

export default function FullPageLoading() {
    return <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 bg-white bg-opacity-50 z-50">
        <div className="flex flex-col items-center gap-3 p-8 rounded-lg bg-white shadow-md">
            <div className={styles.fullPageLoading}></div>
            <p className="text-sm text-gray-500">Loading...</p>
        </div>
    </div>
}