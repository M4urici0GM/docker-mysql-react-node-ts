import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '~/contexts/auth.context';
import Load from '~/pages/Load';
import AppRoutes from './app.route';
import AuthRoutes from './auth.route';

export default function Routes() {
	const { loading, user } = useAuth();

	if (loading) {
		return <Load />;
	}

	return (
		<BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
	);
}
