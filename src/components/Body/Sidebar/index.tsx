import { Box, Button, Image, Text } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";

import profileImage from "@/assets/profile-image.jpg";

export function Sidebar() {
	return (
		<Box w="16rem" borderRadius="0.5rem" bg="brand.cinza-600">
			<Box
				pos="relative"
				overflow="hidden"
				borderRadius="0.5rem"
				paddingBottom="24px"
			>
				<Image
					src={profileImage}
					h="4.5rem"
					w="100%"
					marginBottom="44px"
					objectFit="cover"
				/>
				<Box
					pos="absolute"
					w="3.75rem"
					h="3.75rem"
					bg="brand.cinza-100"
					top="2.5rem"
					left="50%"
					marginLeft="-1.875rem"
					marginBottom="1.5rem"
					color="brand.cinza-900"
					borderRadius="0.5rem"
					borderWidth="3px"
					borderColor="brand.verde-500"
				>
					Foto
				</Box>
				<Text textAlign="center" color="brand.branco" fontWeight="bold">
					Guilherme Canella
				</Text>
				<Text textAlign="center">Frontend Developer</Text>
			</Box>
			<Box
				paddingTop="1.5rem"
				paddingBottom="2rem"
				paddingX="2rem"
				borderTopWidth="1px"
				borderTopColor="brand.cinza-400"
			>
				<Button
					paddingY="1.5rem"
					paddingX="1.5rem"
					w="100%"
					borderRadius="0.5rem"
					borderWidth="1px"
					borderColor="brand.verde-500"
					color="brand.verde-500"
					bg="transparent"
					fontWeight="semibold"
					leftIcon={<AiOutlineEdit />}
				>
					Editar seu perfil
				</Button>
			</Box>
		</Box>
	);
}
