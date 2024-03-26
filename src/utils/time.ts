export function secondsToHHMMSS(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = parseInt(seconds.toString(), 10)
        .toString()
        .padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}