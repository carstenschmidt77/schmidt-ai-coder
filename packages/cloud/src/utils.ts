import type { ExtensionContext } from "vscode"

export function getUserAgent(context?: ExtensionContext): string {
	return `Schmidt-AI-Coder ${context?.extension?.packageJSON?.version || "unknown"}`
}
