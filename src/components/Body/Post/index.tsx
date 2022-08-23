import {
	Box,
	Button,
	Flex,
	Image,
	Text,
	Textarea,
	Link,
	FormControl,
	FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";

import { Comment } from "@/components/Body/Comment";

export function Post() {
	const [isPublishButton, setIsPublishButton] = useState(false);

	const handlePublishButton = () => {
		setIsPublishButton(!isPublishButton);
	};

	return (
		<Box w="52rem" borderRadius="8px" bg="brand.cinza-600" padding="2.5rem">
			<Flex justifyContent="space-between">
				<Flex gap="1rem">
					<Box
						w="3.75rem"
						h="3.75rem"
						bg="brand.cinza-100"
						color="brand.cinza-900"
						borderRadius="8px"
						borderWidth="3px"
						borderColor="brand.cinza-600"
						outline="3px solid"
						outlineColor="brand.verde-500"
					>
						<Image src="https://avatars.githubusercontent.com/u/12264803?v=4" />
					</Box>
					<Text>
						<Text fontWeight="bold" color="brand.branco" display="inline">
							Carlos Silva
						</Text>
						<br />
						Frontend Dev
					</Text>
				</Flex>
				<Flex dir="column">
					<time title="21 de agosto às 17:22" dateTime="2022-08-21 17:22:30">
						Publicado há 1h
					</time>
				</Flex>
			</Flex>
			<Box
				paddingY="1.5rem"
				borderBottomWidth="1px"
				borderBottomColor="brand.cinza-400"
			>
				<Text>
					Hey guys 👋
					<br />
					<br />
					I just uploaded one more project in my portfolio. It is a project
					which I developed during an e-commerce using Typescript and NextJS.
					The name of the project is RapidStore 🚀
					<br />
					<br />
					<Link fontWeight="bold" color="brand.verde-500">
						👉 guycanella.dev/rapidstore
					</Link>
					<br />
					<br />
					<Text color="brand.verde-500" fontWeight="bold">
						#newproject #nextjs #typescript
					</Text>
				</Text>
			</Box>
			<FormControl paddingTop="1.5rem">
				<FormLabel marginBottom="1rem" fontWeight="bold">
					Deixe seu feedback
				</FormLabel>
				<Textarea
					bg="brand.cinza-900"
					borderColor="brand.verde-500"
					marginBottom="1rem"
					placeholder="Deixe um comentário"
					resize="none"
					onFocus={handlePublishButton}
				/>
				<Box display={isPublishButton ? "block" : "none"}>
					<Button
						bg="brand.verde-500"
						color="brand.branco"
						paddingX="1.5rem"
						paddingY="1.5rem"
						marginBottom="1rem"
						type="submit"
					>
						Publicar
					</Button>
				</Box>
			</FormControl>
			<Comment />
		</Box>
	);
}
