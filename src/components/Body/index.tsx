import { Flex } from "@chakra-ui/react";
import { Mainbar } from "./Mainbar";
import { Sidebar } from "./Sidebar";

export function Body() {
	return (
		<Flex gap="2rem" justifyContent="center" paddingTop="2rem">
			<Sidebar />
			<Mainbar />
		</Flex>
	);
}
