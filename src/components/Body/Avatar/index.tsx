import { Box, Image } from "@chakra-ui/react";

type AvatarProps = {
	source: string;
	display: "absolute" | "relative";
	hasBorder?: boolean;
	size: number;
};

export function Avatar({
	source,
	display,
	hasBorder = true,
	size,
}: AvatarProps) {
	return (
		<Box
			pos={display}
			w={`${size}rem`}
			h="min-content"
			bg="brand.cinza-100"
			top={display === "absolute" ? "2.5rem" : "unset"}
			left={display === "absolute" ? "50%" : "unset"}
			marginLeft={display === "absolute" ? "-1.875rem" : "unset"}
			marginBottom={display === "absolute" ? "1.5rem" : "unset"}
			outline={hasBorder ? "3px solid" : "none"}
			outlineColor={hasBorder ? "brand.verde-500" : ""}
			borderRadius="8px"
			borderWidth="3px"
			borderColor="brand.cinza-600"
		>
			<Image borderRadius="8px" objectFit="cover" src={source} />
		</Box>
	);
}
