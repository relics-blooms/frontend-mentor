import { exec } from "node:child_process";
import { join } from "node:path";

/**
 * Returns a gulp task to run a Maven command in a given subdirectory.
 * @param {string} directory - The directory where mvnw is located
 * @param {string} maven_cmd - The Maven command to run (e.g., 'spring-boot:run')
 * @returns {(done: (error?: Error) => void) => void}
 */
export default function maven_script(directory, maven_cmd) {
  return function (done) {
    const cwd = join(process.cwd(), directory);
    const isWin = process.platform === "win32";
    const cmd = isWin ? "mvnw.cmd" : "./mvnw";
    const proc = exec(
      `${cmd} ${maven_cmd}`,
      {
        cwd,
      },
      (error) => {
        done(error || undefined);
      },
    );
    proc.stdout && proc.stdout.pipe(process.stdout);
    proc.stderr && proc.stderr.pipe(process.stderr);
  };
}
