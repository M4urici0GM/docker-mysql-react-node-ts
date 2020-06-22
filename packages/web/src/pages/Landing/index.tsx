import { Container } from '@material-ui/core';
import React from 'react';
import Header from '~/components/Header';
import { useAuth } from '~/contexts/auth.context';

export default function Landing() {
	const { user } = useAuth();

	return (
		<>
			<Header />

			<Container>
				{user ? (
					<p>Seja bem-vindo, {user.name}.</p>
				) : (
					<p>Seja bem-vindo.</p>
				)}
			</Container>
		</>
	);
}
