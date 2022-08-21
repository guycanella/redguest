import { Box, Button, Image, Text } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";

import profileImage from "@/assets/profile-image.jpg";

export function Sidebar() {
	return (
		<Box w="16rem" h="min-content" borderRadius="0.5rem" bg="brand.cinza-600">
			<Box
				pos="relative"
				overflow="hidden"
				borderRadius="8px"
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
					borderRadius="8px"
					borderWidth="3px"
					borderColor="brand.cinza-600"
					outline="3px solid"
					outlineColor="brand.verde-500"
				>
					<Image
						borderRadius="8px"
						overflow="hidden"
						src="https://avatars.githubusercontent.com/u/12264803?v=4"
					/>
				</Box>
				<Text
					textAlign="center"
					color="brand.branco"
					fontWeight="bold"
					lineHeight={1.6}
				>
					Guilherme Canella
				</Text>
				<Text textAlign="center" fontSize="0.875rem">
					Frontend Developer
				</Text>
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
					borderRadius="8px"
					borderWidth="1px"
					borderColor="brand.verde-500"
					color="brand.verde-500"
					bg="transparent"
					fontWeight="semibold"
					leftIcon={<AiOutlineEdit />}
					_hover={{
						backgroundColor: "brand.verde-500",
						color: "brand.branco",
					}}
				>
					Editar seu perfil
				</Button>
			</Box>
		</Box>
	);
}
