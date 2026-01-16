import { totalCourseHours, hoursPerSession } from "./config.js";

export function trackProgress(sessions) {
    const totalStudyTime = sessions * hoursPerSession;
    const percentage = (totalStudyTime / totalCourseHours) * 100;

    const barLength = 10;
    const filledBars = Math.round((percentage / 100) * barLength);
    const emptyBars = barLength - filledBars;

    const progressBar = "█".repeat(filledBars) + "░".repeat(emptyBars);

    console.log("📊 Study Progress Summary");
    console.log("-------------------------");
    console.log(`Total study time: ${totalStudyTime.toFixed(2)} hours`);
    console.log(`Progress: ${percentage.toFixed(2)}%`);
    console.log(`Progress bar: ${progressBar}`);
    console.log();
}
