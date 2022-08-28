import {
	Box,
	Button,
	Flex,
	Text,
	Textarea,
	Link,
	FormControl,
	FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Comment } from "@/components/Body/Comment";
import { Avatar } from "../Avatar";

type PostProps = {
	id: number;
	author: {
		avatarUrl: string;
		name: string;
		role: string;
	};
	content: Array<{
		type: string;
		content: string;
	}>;
	publishedAt: Date;
};

export function Post({ post }: { post: PostProps }) {
	const [isPublishButton, setIsPublishButton] = useState(false);

	const publishedDateFormatted = format(
		post?.publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

	const publishedDateRelativeToNow = formatDistanceToNow(post?.publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	const handlePublishButton = () => {
		setIsPublishButton(!isPublishButton);
	};

	return (
		<Box
			w={{ pp: "100%", gg: "52rem" }}
			borderRadius="8px"
			bg="brand.cinza-600"
			padding={{ pp: "1rem", gg: "2.5rem" }}
		>
			<Flex justifyContent="space-between">
				<Flex gap="1rem">
					<Avatar
						display="relative"
						size={3.75}
						source={post?.author?.avatarUrl}
					/>
					<Text fontSize={{ pp: "0.875rem", gg: "1rem" }}>
						<span style={{ fontWeight: "bold", color: "#fff" }}>
							{post?.author?.name}
						</span>
						<br />
						{post?.author?.role}
					</Text>
				</Flex>
				<Flex dir="column" fontSize={{ pp: "0.875rem", gg: "1rem" }}>
					<time
						title={publishedDateFormatted}
						dateTime={post?.publishedAt.toISOString()}
					>
						Publicado {publishedDateRelativeToNow}
					</time>
				</Flex>
			</Flex>
			<Box
				paddingY="1.5rem"
				borderBottomWidth="1px"
				borderBottomColor="brand.cinza-400"
			>
				{post?.content.map((cont, idx) => {
					return cont?.type === "paragraph" ? (
						<Text
							key={`paragraph-${idx}`}
							fontSize={{ pp: "0.875rem", gg: "1rem" }}
							marginBottom="1rem"
						>
							{cont?.content}
						</Text>
					) : (
						<Link
							key={`paragraph-${idx}`}
							fontWeight="bold"
							color="brand.verde-500"
						>
							{cont?.content}
						</Link>
					);
				})}
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
					fontSize={{ pp: "0.875rem", gg: "1rem" }}
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
