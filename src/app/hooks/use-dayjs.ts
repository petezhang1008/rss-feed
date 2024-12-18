import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import advancedFormat from "dayjs/plugin/advancedFormat"
require('dayjs/locale/zh-cn')

dayjs.extend(relativeTime)
dayjs.extend(advancedFormat)

export function useDayjs() {
    dayjs.locale('zh-cn')

    function formatDateToMMDDYYYY(date: Date) {
        return dayjs(date).format('MM/DD/YYYY')
    }

    function formatDateToHHmmMMDD(date: Date) {
        return dayjs(date).format('MMM D hh:mm A')
    }

    return {
        formatDateToMMDDYYYY,
        formatDateToHHmmMMDD,
        dayjs
    }
}