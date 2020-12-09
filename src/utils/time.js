import dayjs from "dayjs";

const DateTimeFormat = "YYYY-MM-DD HH:mm:ss";
const DateFormat = "YYYY-MM-DD";

export const getDateTime = time => dayjs(time).format(DateTimeFormat);
export const getDate = time => dayjs(time).format(DateFormat);
