export function useEventStop() {
    function stopEvent(event: React.MouseEvent<HTMLDivElement>) {
        event.stopPropagation()
    }

    function stopPreventDefault(event: React.MouseEvent<HTMLAnchorElement>) {
        event.stopPropagation()
        event.preventDefault()
    }

    function stopAllEvent(event: React.MouseEvent<HTMLDivElement>) {
        event.stopPropagation()
        event.preventDefault()
    }

    return {
        stopEvent,
        stopPreventDefault,
        stopAllEvent
    }
}