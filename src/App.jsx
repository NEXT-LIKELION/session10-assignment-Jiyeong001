import { Container, CssBaseline } from "@mui/material";
import SignInForm from "./components/SignInForm";

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <SignInForm />
    </Container>
  );
}

export default App;
