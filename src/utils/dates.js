import moment from "moment";

export const dateDiff = (date1, date2) => {
    const dt_date1 = moment(date1);
    const dt_date2 = moment(date2);

    const diff = moment.duration(Math.abs(dt_date1.diff(dt_date2)));

    const years = diff.years();
    const months = diff.months();
    const days = diff.days();

    const result = [];
    if (years > 0) {
        result.push(years + " year" + (years !== 1 ? "s" : ""));
    }
    if (months > 0) {
        result.push(months + " month" + (months !== 1 ? "s" : ""));
    }
    if (days > 0) {
        result.push(days + " day" + (days !== 1 ? "s" : ""));
    }

    return result.join(", ");
};

export function formatDuration(seconds) {
    const duration = moment.duration(seconds, "seconds");
    const hours = Math.floor(duration.asHours());
    const mins = Math.floor(duration.minutes());
    const secs = Math.floor(duration.seconds());
    const formattedDuration = `${hours}:${mins < 10 ? "0" : ""}${mins}:${
        secs < 10 ? "0" : ""
    }${secs}`;
    return formattedDuration;
}

export const formatDate = (offset) => {
    const date = moment().add(offset, "days");
    return date.format("YYYY-MM-DD");
};

export function timeStringToSeconds(timeStr) {
    if (typeof timeStr !== "string") {
        throw new Error("timeStr must be a string");
    }
    const [hours, minutes, seconds] = timeStr.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}

/**
 * Get the day and month in the format "MM-DD" from a given date string.
 * @param {string} dateString - The input date string (format: "YYYY-MM-DDTHH:mm:ss.sssZ").
 * @returns {string} The day and month in the format "MM-DD".
 */
export function getMonthAndDay(dateString) {
    // Create a Date object from the input date string
    const timestamp = new Date(dateString);

    // Extract the day and month
    const day = ("0" + timestamp.getDate()).slice(-2); // Ensures two digits
    const month = ("0" + (timestamp.getMonth() + 1)).slice(-2); // Adding 1 to get the month in the range 1-12, and ensures two digits

    // Format the date as "MM-DD"
    const formattedDate = month + "-" + day;

    return formattedDate;
}
