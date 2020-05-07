import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="md" fixed>
        {children}
      </Container>
      <Footer />
    </>
  );
}
