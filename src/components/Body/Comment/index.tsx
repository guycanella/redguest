import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CgTrash } from "react-icons/cg";
import { FiThumbsUp } from "react-icons/fi";

export function Comment() {
	return (
		<Flex gap="1rem">
			<Box
				w="3.125rem"
				h="3.125rem"
				borderRadius="8px"
				borderWidth="1px"
				borderColor="brand.cinza-600"
			>
				<Image
					borderRadius="8px"
					src="https://avatars.githubusercontent.com/u/12264803?v=4"
				/>
			</Box>
			<Flex flexDirection="column" w="100%">
				<Box
					bg="brand.cinza-700"
					padding="1rem"
					w="100%"
					borderRadius="8px"
					marginBottom="1rem"
				>
					<Flex justifyContent="space-between">
						<Text color="brand.branco" fontSize="0.875rem" fontWeight="bold">
							Guilherme Canella{" "}
							<Text display="inline" color="brand.cinza-400">
								(você)
							</Text>
						</Text>
						<CgTrash size={24} cursor="pointer" color="brand.cinza-400" />
					</Flex>
					<Text color="brand.cinza-400" fontSize="0.75rem" marginBottom="1rem">
						Cerca de 2h
					</Text>
					<Text>Muito bom Carlos, parabéns!! 👏👏</Text>
				</Box>
				<Flex flexDirection="row" cursor="pointer" w="max-content">
					<FiThumbsUp />
					<Text marginLeft="0.5rem">Aplaudir * 03</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
