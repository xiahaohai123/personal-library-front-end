const timeFormat = (time, pattern = "") => {
    let y = time.getFullYear()
    let m = (time.getMonth() + 1).toString().padStart(2, '0')
    let d = time
        .getDate()
        .toString()
        .padStart(2, '0')

    if (pattern && pattern.toLowerCase() === 'yyyy-mm-dd') {
        return `${y}-${m}-${d}`
    } else if (pattern && pattern.toLowerCase() === '(yyyy)-mm-dd') {
        let thisYear = new Date().getFullYear()
        if (thisYear === y) {
            return `${m}-${d}`
        } else {
            return `${y}-${m}-${d}`
        }
    }
    else {
        let hh = time
            .getHours()
            .toString()
            .padStart(2, '0')
        let mm = time
            .getMinutes()
            .toString()
            .padStart(2, '0')
        let ss = time
            .getSeconds()
            .toString()
            .padStart(2, '0')
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    }
}

const timeFormatByTimeStamp = (timeStamp, pattern = "") => {
    if (timeStamp === null) {
        return null
    }
    let date = new Date(parseFloat((timeStamp.toString().padEnd(13, '0'))))
    return timeFormat(date, pattern)
}

export {
    timeFormat,
    timeFormatByTimeStamp
}