import { Card, Image, View, Heading, Flex, Badge, Text, Button, Collection, Divider } from '@aws-amplify/ui-react';

const DefaultCard = ({ items }) => {
	return (
		// <View backgroundColor={tokens.colors.background.secondary} padding={tokens.space.medium}>
		// 	<Card>
		// 		<Flex direction='row' alignItems='flex-start'>
		// 			<Image alt='Road to milford sound' src={item.img} width='203px' />
		// 			<Flex direction='column' alignItems='flex-start' gap={tokens.space.xs}>
		// 				{item?.badges?.map((el, index) => (
		// 					<Flex>
		// 						<Badge size='small' variation='info' key={index}>
		// 							{el}
		// 						</Badge>
		// 					</Flex>
		// 				))}

		// 				<Heading level={5}>{item.heading}</Heading>

		// 				<Text as='span'>{item.desc}</Text>
		// 				<Button variation='primary'>View</Button>
		// 			</Flex>
		// 		</Flex>
		// 	</Card>
		// </View>
		<Collection items={items} type='list' direction='row' gap='20px' wrap='nowrap'>
			{(item, index) => (
				<Card
					key={index}
					borderRadius='medium'
					maxWidth='20rem'
					variation='outlined'
					marginTop='20px'
					marginLeft='40px'
				>
					<Image src={item.img} alt='Glittering stream with old log, snowy mountain peaks tower over a green field.' />
					<View padding='xs'>
						<Flex>
							{item.badges.map((badge) => (
								<Badge
									key={badge}
									backgroundColor={badge === 'Waterfront' ? 'blue.40' : badge === 'Mountain' ? 'green.40' : 'yellow.40'}
								>
									{badge}
								</Badge>
							))}
						</Flex>
						<Divider padding='xs' />
						<Heading padding='medium'>{item.heading}</Heading>
						<Text variation='primary' as='p' lineHeight='1.5em' textDecoration='none'>
							{item.desc}
						</Text>
						<Button variation='primary' isFullWidth>
							Book it
						</Button>
					</View>
				</Card>
			)}
		</Collection>
	);
};
export default DefaultCard;
