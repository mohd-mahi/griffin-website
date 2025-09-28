import { useEffect } from "react";
import { useLoader } from "../../context/Loader/LoaderContext";

const PageWrapper = ({ children }) => {
  const { isClickDetected, setPageComponentReady } = useLoader();

  const delay = isClickDetected ? 1000 : 2500;

  useEffect(() => {
    setPageComponentReady(true);
  }, [setPageComponentReady]);

  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default PageWrapper;
