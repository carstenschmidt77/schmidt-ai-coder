import React from "react"

export const SchmidtAILogo = () => {
	const iconsBaseUri = (window as any).ICONS_BASE_URI || ""
	return (
		<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
			<img
				src={`${iconsBaseUri}/schmidt-ai-full-logo.svg`}
				alt="Schmidt AI Coder"
				style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
			/>
		</div>
	)
}
