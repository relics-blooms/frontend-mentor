import { exec } from "node:child_process";
import { join } from "node:path";

/**
 * Returns a gulp task to run 'pnpm --filter <filter> dev'
 * @param {string} directory - The filter to apply to the pnpm command
 * @param {string} pnpm_cmd - The Maven command to run (e.g., 'spring-boot:run')
 * @returns {(done: (error?: Error) => void) => void}
 */
export default function pnpm_script(directory, pnpm_cmd) {
  return function (done) {
    const cwd = join(process.cwd(), directory);
    const cmd = "pnpm run";
    console.log(`${cmd} ${pnpm_cmd}`);
    const proc = exec(
      `${cmd} ${pnpm_cmd}`,
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
