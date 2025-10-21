import { exec } from "child_process";

export function openFile(path) {
  exec(`${getCommandLine()} ${path}`);
}

function getCommandLine() {
  switch (process.platform) {
    case "darwin": return "open";
    case "win32": return "start";
    case "win64": return "start";
    default: return "xdg-open";
  }
}
