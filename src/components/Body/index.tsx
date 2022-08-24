import { Flex } from "@chakra-ui/react";
import { Mainbar } from "./Mainbar";
import { Sidebar } from "./Sidebar";

export function Body() {
	return (
		<Flex
			gap="2rem"
			justifyContent="center"
			paddingY="2rem"
			paddingX={{ pp: "16px" }}
			flexDirection={{ pp: "column", m: "row" }}
		>
			<Sidebar />
			<Mainbar />
		</Flex>
	);
}
