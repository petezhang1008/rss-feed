export function useEventStop() {
    function stopEvent(event: React.MouseEvent<HTMLDivElement>) {
        event.stopPropagation()
        event.preventDefault()
    }

    return {
        stopEvent
    }
}