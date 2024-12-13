
export type DeleteContentProps = {
    title?: string
    message?: string
}

export function DeleteContent({ content = {
    title: 'Are you sure?',
    message: 'You won\'t be able to revert this!'
} }: {
    content?: DeleteContentProps
}) {
    return (
        <div className="flex flex-col gap-2">
            {content.title && <h1 className="text-lg font-bold">{content.title}</h1>}
            {content.message && <p className="text-gray-600 text-sm font-medium">{content.message} </p>}
        </div>
    )
}