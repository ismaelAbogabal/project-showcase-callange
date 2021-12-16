import React, { Fragment, useState } from "react";
import ProjectAbout from "../components/project/about";
import BackModal from "../components/project/alerts/back-model";
import CongratulationsModel from "../components/project/alerts/congratulations-modal";
import ProjectDetails from "../components/project/details";
import ProjectProgress from "../components/project/progress";

export default function ProjectScreen() {
  const [showModal, setShowModal] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleShowCongrate(params) {
    setShowModal(false);
    setShowCongratulations(true);
  }

  function handleCloseCongrate(params) {
    setShowCongratulations(false);
  }

  return (
    <Fragment>
      <ProjectDetails showModel={handleShowModal} />
      <ProjectProgress />
      <ProjectAbout showModel={handleShowModal} />
      {showModal && (
        <BackModal onSubmit={handleShowCongrate} onClose={handleCloseModal} />
      )}
      {showCongratulations && (
        <CongratulationsModel onClose={handleCloseCongrate} />
      )}
      {/* todo congratulations  */}
    </Fragment>
  );
}
