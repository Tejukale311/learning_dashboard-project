import { totalCourseHours, hoursPerSession } from "./config.js";

export function motivateUser(sessions) {
    const totalStudyTime = sessions * hoursPerSession;
    const percentage = (totalStudyTime / totalCourseHours) * 100;

    let message = "";

    if (percentage < 25) {
        message = "Keep going! Every session counts.";
    } else if (percentage < 50) {
        message = "Great progress! You're building momentum.";
    } else if (percentage < 75) {
        message = "Halfway there! Stay consistent.";
    } else {
        message = "Amazing work! You're almost done!";
    }

    console.log("💡 Motivation");
    console.log("-------------");
    console.log(message);
    console.log();
}
