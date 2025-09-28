import AppRoutes from "./AppRoutes";
import TransitionWrapper from "./components/route/TransitionWrapper";
import CustomRouterProvider from "./context/customRouter/CustomRouterContext";
import LenisProvider from "./context/Lenis/LenisContext";
import LoaderProvider from "./context/Loader/LoaderContext";

function App() {
  return (
    <CustomRouterProvider>
      <LenisProvider>
        <LoaderProvider>
          <TransitionWrapper />
          <AppRoutes />
        </LoaderProvider>
      </LenisProvider>
    </CustomRouterProvider>
  );
}

export default App;
