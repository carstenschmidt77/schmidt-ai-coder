import { useEffect, useState } from "react"
import { ProfileDataResponsePayload } from "@roo/WebviewMessage"
import { vscode } from "@/utils/vscode"

export function useKiloIdentity(kilocodeToken: string, machineId: string) {
	const [kiloIdentity, setKiloIdentity] = useState("")
	useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			if (event.data.type === "profileDataResponse") {
				const payload = event.data.payload as ProfileDataResponsePayload | undefined
				const success = payload?.success || false
				const tokenFromMessage = payload?.data?.kilocodeToken || ""
				const email = payload?.data?.user?.email || ""
				if (!success) {
					console.error("KILOTEL: Failed to identify Schmidt AI user, message doesn't indicate success:", payload)
				} else if (tokenFromMessage !== kilocodeToken) {
					console.error("KILOTEL: Failed to identify Schmidt AI user, token mismatch:", payload)
				} else if (!email) {
					console.error("KILOTEL: Failed to identify Schmidt AI user, email missing:", payload)
				} else {
					console.debug("KILOTEL: Schmidt AI user identified:", email)
					setKiloIdentity(email)
					window.removeEventListener("message", handleMessage)
				}
			}
		}

		if (kilocodeToken) {
			console.debug("KILOTEL: fetching profile...")
			window.addEventListener("message", handleMessage)
			vscode.postMessage({
				type: "fetchProfileDataRequest",
			})
		} else {
			console.debug("KILOTEL: no Schmidt AI user")
			setKiloIdentity("")
		}

		return () => {
			window.removeEventListener("message", handleMessage)
		}
	}, [kilocodeToken])
	return kiloIdentity || machineId
}
