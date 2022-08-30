import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Progress = ({ uploadState, percentUploaded }) => (
  uploadState === "uploading" && (
    <ProgressBar 
      className="progress__bar"
      percent={percentUploaded}
      progress
      indicating
      size="medium"
      inverted
    />
  )
);

export default Progress;