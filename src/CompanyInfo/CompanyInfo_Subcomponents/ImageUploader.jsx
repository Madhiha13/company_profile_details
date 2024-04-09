import React from 'react';
import "../../ProfileDetaills_css/imageUploader.css";
const ImageUploader = ({ handleUploaderClose, handleDeleteProfilePicture }) => {
  const handleCancel = () => {
    handleUploaderClose();
  };

  return (
    <div className="image_uploader">
      <div className="upload-overlay">
        <div className="preview-container">
          <button className="btn" onClick={handleCancel}>Cancel</button>
          <button className="btn" onClick={handleDeleteProfilePicture}>Delete Profile</button>
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;
