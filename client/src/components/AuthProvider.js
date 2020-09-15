import React, { createContext, useContext, useState, useEffect } from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

export const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
}

export const AuthProvider = props => {
	let userObj = {
		"pending" : true,
		"authenticated" : false
	}

	const [authData, setAuthData] = useState(userObj)

	useEffect(autoLogin(), [])

	const autoLogin = () => {

	}

	const login = (user, pass, callback) => { 

	}

	const logout = (callback) => {

	}

	const consumerData = { ...authData, login, logout }  //Provides above content to consumers

	return <AuthContext.Provider value={consumerData} {...props} />
}

export default AuthProvider