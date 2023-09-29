import PropTypes from 'prop-types';
import { useState, useContext, createContext } from 'react';

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.defaultProps = {
  children: '',
};

AuthProvider.propTypes = {
  children: PropTypes.string,
};

export const useAuthContext = () => useContext(AuthContext);
