import moment from 'moment';
export default class DateFormat {
    // Gets local time zone of user
    async getTimeZone() {
        var date = new Date();
        var offsetInHours = date.getTimezoneOffset() / 60;
        if (offsetInHours < 0) {
            return (-1 * offsetInHours)
        }
        if (offsetInHours > 0) {
            return (-1 * offsetInHours)
        }
        return 0
    }

    // Changes from old to new format
    changeDateFormat(date, newFormat, old) {
        try {
            let oldFormat = old ? old : "YYYY-MM-DD"
            let response = moment(date, oldFormat).format(newFormat)
            if (response != 'Invalid date') {
                return response
            }
            return ''
        } catch (e) {
            return ''
        }
    }

    // For date and time both. Old format must be given
    changeFormat(date, newFormat, old) {
        try {
            let oldFormat = old ? old : "YYYY-MM-DD"
            let response = moment(date, oldFormat).format(newFormat)
            if (response != 'Invalid date') {
                return response
            }
            return ''
        } catch (e) {
            return ''
        }
    }

    changeTimeFormat(time, newFormat, old) {
        try {
            let oldFormat = old || "HH:mm:ss"
            let response = moment(time, oldFormat).format(newFormat)
            if (response != 'Invalid date') {
                return response
            }
            return ''
        } catch (e) {
            return ''
        }
    }

    // Calculates duration between two dates or times stamps
    getcalculateTime(start, end, format) {
        try {
            let oldFormate = format || 'YYYY-MM-DDHH:mm:ss'
            var startTime = moment(start, oldFormate)
            var endTime = moment(end, oldFormate)

            var duration = moment.duration(moment(endTime).diff(startTime));
            if (duration.days() > 0 || duration.hours() > 0 || duration.minutes() > 0) {
                var durationTime = null
                if (duration.minutes() > 0) { durationTime = duration.minutes() + ' minutes ' }
                if (duration.hours() > 0) { durationTime = duration.hours() + ' hours ' }
                if (duration.days() > 0) { durationTime = duration.days() + ' days ' }
                return durationTime
            }
            return null
        } catch (e) {
            return null
        }
    }

    async getWeekend(string) {
        let weekendSunday = moment().day(7).format(string || 'YYYY-MM-DD HH:mm:ss')
        let weekendSaturday = moment().day(6).format(string || 'YYYY-MM-DD HH:mm:ss')
        return [
            weekendSaturday,
            weekendSunday
        ]
    }
    // Finds if one date is greater than the other or not. Return Boolean
    async dateComparison(startDate, endDate, startTime, endTime, startDateFormat, startTimeForamt, endDateFormat, endTimeFormat) {
        var totalStartTime
        var totalEndTime
        var totalStartTimeFormat
        var totalEndTimeFormat
        if (startDate) {
            totalStartTime = startDate
            if (startDateFormat) { totalStartTimeFormat = startDateFormat }
            if (!startDateFormat) { totalStartTimeFormat = 'YYYY-MM-DD' }
        }

        if (endDate) {
            totalEndTime = endDate
            if (endDateFormat || startDateFormat) { totalEndTimeFormat = endDateFormat || startDateFormat }
            if (!endDateFormat || !startDateFormat) { totalEndTimeFormat = 'YYYY-MM-DD' }
        }
        if (startTime) {
            totalStartTime = totalStartTime + startTime
            if (startTimeForamt) { totalStartTimeFormat = totalStartTimeFormat + startTimeForamt }
            if (!startTimeForamt) { totalStartTimeFormat = totalStartTimeFormat + 'HH:mm:ss' }
        }

        if (endTime) {
            totalEndTime = totalEndTime + endTime
            if (endTimeFormat) { totalEndTimeFormat = totalEndTimeFormat + endTimeFormat }
            if (!endTimeFormat) { totalEndTimeFormat = totalEndTimeFormat + 'HH:mm:ss' }
        }
        let d1 = moment(totalStartTime, totalStartTimeFormat)
        let d2 = moment(totalEndTime, totalEndTimeFormat)
        if (d2.valueOf() > d1.valueOf()) {
            return true
        }
        return false
    }

}
module.exports = { DateFormat }