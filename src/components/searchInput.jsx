import { TextInput, ActionIcon, rem } from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";

export function SearchInput(props) {
	return (
		<TextInput
			radius='xl'
			className='mb-2'
			size='md'
			placeholder='Search questions'
			rightSectionWidth={42}
			leftSection={
				<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
			}
			rightSection={
				<ActionIcon size={32} radius='xl' variant='filled'>
					<IconArrowRight
						style={{ width: rem(18), height: rem(18) }}
						stroke={1.5}
					/>
				</ActionIcon>
			}
			{...props}
		/>
	);
}
