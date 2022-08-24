import { Box, Button, Image, Text } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";

import profileImage from "@/assets/profile-image.jpg";
import { Avatar } from "../Avatar";

export function Sidebar() {
	return (
		<Box
			w={{ pp: "100%", gg: "16rem" }}
			h="min-content"
			borderRadius="0.5rem"
			bg="brand.cinza-600"
		>
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
				<Avatar
					display="absolute"
					size={3.75}
					source="https://avatars.githubusercontent.com/u/12264803?v=4"
				/>
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
				display={window.screen.width < 768 ? "flex" : "block"}
			>
				<Button
					paddingY="1.5rem"
					paddingX="1.5rem"
					w={{ pp: "60%", gg: "100%" }}
					marginX={{ pp: "auto", gg: "unset" }}
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
