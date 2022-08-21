import { Flex } from "@chakra-ui/react";

import { Post } from "../Post";

export function Mainbar() {
	return (
		<Flex flexDirection="column" gap="2rem">
			<Post />
			<Post />
		</Flex>
	);
}
