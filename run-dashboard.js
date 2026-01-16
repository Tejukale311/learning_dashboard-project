import { trackProgress } from "./tracker.js";
import { motivateUser } from "./motivate.js";

const sessions = Number(process.argv[2]) || 0;

console.log("🎓 Learning Dashboard");
console.log("=====================\n");

trackProgress(sessions);
motivateUser(sessions);
