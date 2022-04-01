import { AuthContext, AuthProvider } from './auth'

const ContextProvider = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
)

export { AuthContext }

export default ContextProvider
