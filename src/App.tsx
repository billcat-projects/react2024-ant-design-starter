
import "./App.css";
import { AuthProvider } from "./hooks/useAuth";
import { Router } from '@/routes'

function App() {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}

export default App;
