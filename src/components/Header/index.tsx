import { Container, Flex, Image, Text } from "@chakra-ui/react";

import redguestLogo from "@/assets/redguest-logo.svg";

export function Header() {
	return (
		<Flex
			bg="brand.cinza-600"
			color="#fff"
			verticalAlign="middle"
			maxW="100vw"
			padding="1.25rem 0"
			fontWeight={900}
			letterSpacing="widest"
			justifyContent="center"
			gap="20px"
		>
			<Image src={redguestLogo} width="36px" alt="Logo da RedGuest" />
			<Text marginY="auto">RedGuest</Text>
		</Flex>
	);
}
