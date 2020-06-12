import React from 'react';

import AuthProvider from './auth.context';

const Provider: React.FC = ({ children }) => (
	<AuthProvider>{children}</AuthProvider>
);

export default Provider;
