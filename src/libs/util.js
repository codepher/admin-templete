import moment from "moment";

export default {

    // 格式化时间
    FormatDateTime(unixtime, format) {
        if (!unixtime) {
            return '--'
        }
        if (!format) {
            format = 'YYYY-MM-DD HH:mm:ss'
        }
        return moment.unix(unixtime).format(format)
    },

    FormatDateDuration(num) {
        return moment.duration(num).humanize(false)
    },

    // 相对时间
    FormatDateFromNow(unixtime) {
        if (!unixtime) {
            return '--'
        }
        return moment.unix(unixtime).fromNow()
    },
}
