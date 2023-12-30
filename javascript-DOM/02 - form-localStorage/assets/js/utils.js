import dayjs from "dayjs";

export function formatMyDate(date, format = "DD MMM - YYYY") {

    return dayjs(date).format(format);

}