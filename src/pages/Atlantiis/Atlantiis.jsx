import React from "react";
import AtlantiisSec from "../../components/AtlantiisPage/AtlantiisSec";
import BusinessSec from "../../components/AtlantiisPage/BusinessSec";
import PromoSlide from "../../components/AtlantiisPage/Feature";
import Banner from "../../components/AtlantiisPage/Banner";
import Ameneties from "../../components/AtlantiisPage/Ameneties";
import ArchitechInfo from "../../components/AtlantiisPage/ArchitechInfo";
import Explore from "../../components/AtlantiisPage/Explore";
import Conveniences from "../../components/AtlantiisPage/Conveniences";
import ContactUs from "../../components/ContactUs";
import { Helmet } from "react-helmet";

const Atlantiis = () => {
  // useEffect(() => {
  //   document.title = "Griffin Innfra - Atlantiis";
  // }, []);
  return (
    <>
      <Helmet>
        <title>Griffin Innfra - Atlantiis</title>
      </Helmet>
      <AtlantiisSec />
      <BusinessSec />
      <PromoSlide />
      <Banner />
      <Ameneties />
      <Explore />
      <ArchitechInfo />
      <Conveniences />
      <ContactUs />
    </>
  );
};

export default Atlantiis;
