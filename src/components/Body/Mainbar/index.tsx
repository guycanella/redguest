import { Flex } from "@chakra-ui/react";

import { Post } from "../Post";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://avatars.githubusercontent.com/u/12264803?v=4",
			name: "Guilherme Arantes Canella",
			role: "Frontend Dev",
		},
		content: [
			{ type: "paragraph", content: "Hey guys" },
			{
				type: "paragraph",
				content:
					"I just uploaded one more project in my portfolio. It is a project which I developed during an e-commerce using Typescript and NextJS. The name of the project is RapidStore 🚀",
			},
			{ type: "link", content: "👉 guycanella.dev/rapidstore" },
			{ type: "paragraph", content: "#newproject #nextjs #typescript" },
		],
		publishedAt: new Date("2022-05-03 20:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://avatars.githubusercontent.com/u/6643122?v=4",
			name: "Carlos Silva",
			role: "Backend Dev",
		},
		content: [
			{ type: "paragraph", content: "Hey guys" },
			{
				type: "paragraph",
				content:
					"I just uploaded one more project in my portfolio. It is a project which I developed during an e-commerce using Typescript and NextJS. The name of the project is RapidStore 🚀",
			},
			{ type: "link", content: "👉 guycanella.dev/rapidstore" },
			{ type: "paragraph", content: "#newproject #nextjs #typescript" },
		],
		publishedAt: new Date("2022-05-10 21:15:00"),
	},
];

export function Mainbar() {
	return (
		<Flex flexDirection="column" gap="2rem">
			{posts.map((post, index) => {
				return <Post key={`post-${index}`} post={post} />;
			})}
		</Flex>
	);
}
