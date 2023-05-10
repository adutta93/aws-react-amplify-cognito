import React from 'react';
import './styles.css';
import { Authenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Card from '../components/Card';
const Premium = () => {
	const items = [
		{
			heading: 'Yoda',
			desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
			badges: ['Plus', 'Verified'],
			img: 'https://robohash.org/yoda.png?size=200x200',
		},
		{
			heading: 'Darth Maul',
			desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
			badges: ['Plus+', 'Verified'],
			img: 'https://robohash.org/darthmaul.png?size=200x200',
		},
		{
			heading: 'Chewbacca',
			desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
			badges: ['Plus+', 'Verified'],
			img: 'https://robohash.org/chewbacca.png?size=200x200',
		},
		{
			heading: 'Anakin Skywalker(Darth Vader)',
			desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
			badges: ['Plus+', 'Verified'],
			img: 'https://robohash.org/darthvader.png?size=200x200',
		},
	];
	return (
		<Authenticator>
			{({ signOut }) => (
				<div>
					<div className='nav-cont'>
						<div className='head-wrap'>
							<h2>Hello there!</h2>
							<h4>You're authenticated</h4>
						</div>

						<Button variation='destructive' onClick={signOut}>
							Log out
						</Button>
					</div>
					<Card items={items} />
					{/* {items.map((item, index) => (
						<Card item={item} key={index} />
					))} */}
				</div>
			)}
		</Authenticator>
	);
};
export default Premium;
