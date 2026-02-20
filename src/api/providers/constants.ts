import { X_KILOCODE_VERSION } from "../../shared/schmidtaicoder/headers"
import { Package } from "../../shared/package"

export const DEFAULT_HEADERS = {
	// DO NOT ADJUST HTTP-Referer, OpenRouter uses this as an identifier
	// This needs coordination with them if adjustment is needed
	"HTTP-Referer": "https://kilocode.ai",
	"X-Title": "Schmidt AI Coder",
	[X_KILOCODE_VERSION]: Package.version,
	"User-Agent": `Schmidt-AI-Coder/${Package.version}`,
}
