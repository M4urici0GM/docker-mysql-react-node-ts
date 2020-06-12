import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';

import Header from '~/components/Header';
import UserList from '~/components/UserList';
import serverAPI from '~/services/serverAPI';
import { IUser } from '~/services/authentication';

export default function SignIn() {
	const [users, setUsers] = useState([] as IUser[]);

	useEffect(() => {
		getUsers();
	}, []);

	async function getUsers() {
		const response = await serverAPI('/user');
		const data: IUser[] = response.data;
		const comingUsers: IUser[] = [];

		for (const currentUser of data) {
			comingUsers.push({
				_id: currentUser._id,
				name: currentUser.name,
				email: currentUser.email,
			});
		}

		setUsers(comingUsers);
	}

	return (
		<>
			<Header />

			<Container style={{ marginTop: 10 }}>
				<UserList rows={users} />
			</Container>
		</>
	);
}
