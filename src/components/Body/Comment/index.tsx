import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CgTrash } from "react-icons/cg";
import { FiThumbsUp } from "react-icons/fi";
import { Avatar } from "../Avatar";

const handleSize = (screenSize: number, type: string) => {
	if (type === "trash") {
		return screenSize < 768 ? 20 : 24;
	}

	return screenSize < 768 ? 13 : 18;
};

export function Comment() {
	return (
		<Flex gap={{ pp: "0.5rem", gg: "1rem" }}>
			<Avatar
				display="relative"
				hasBorder={false}
				size={3.125}
				source="https://avatars.githubusercontent.com/u/12264803?v=4"
			/>
			<Flex flexDirection="column" w="100%">
				<Box
					bg="brand.cinza-700"
					padding="1rem"
					w="100%"
					borderRadius="8px"
					marginBottom="1rem"
				>
					<Flex justifyContent="space-between">
						<Text
							color="brand.branco"
							fontSize={{ pp: "0.85rem", gg: "0.875rem" }}
							fontWeight="bold"
						>
							Guilherme Canella{" "}
							<Text display="inline" color="brand.cinza-400">
								(você)
							</Text>
						</Text>
						<CgTrash
							size={handleSize(window.screen.width, "trash")}
							cursor="pointer"
							color="brand.cinza-400"
						/>
					</Flex>
					<Text
						color="brand.cinza-400"
						fontSize={{ pp: "0.7rem", gg: "0.75rem" }}
						marginBottom="1rem"
					>
						Cerca de 2h
					</Text>
					<Text fontSize={{ pp: "0.875rem", gg: "1rem" }}>
						Muito bom Carlos, parabéns!! 👏👏
					</Text>
				</Box>
				<Flex
					flexDirection="row"
					cursor="pointer"
					w="max-content"
					alignItems="center"
					fontSize={{ pp: "0.875rem", gg: "1rem" }}
					_hover={{
						color: "brand.verde-500",
					}}
				>
					<FiThumbsUp size={handleSize(window.screen.width, "thumbs")} />
					<Text marginLeft="0.5rem">Aplaudir * 03</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
