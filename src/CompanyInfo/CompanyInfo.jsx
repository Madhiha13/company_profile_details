import React, { useState } from 'react';
import ImageUploader from "./CompanyInfo_Subcomponents/ImageUploader";
import SettingOption from './CompanyInfo_Subcomponents/SettingOption';
import "./../ProfileDetaills_css/CompanyInfo.css";
import {whiteVariationSvg,userLgSvg,settingsSvg,editIconSvg,addIconSvg} from './../assets/index'

const CompanyInfo = () => {
    const [organizationName, setOrganizationName] = useState('');
    const [userImage, setUserImage] = useState(null);
    const [displayUploader, setDisplayUploader] = useState(false);
    const [display, setDisplay] = useState(false);


    const handleEditIconClick = () => {
      setDisplayUploader(true);
    };

    const handleUploaderClose = () => {
      setDisplayUploader(false);
    };

    const handleImageUpload = (uploadedImage) => {
      setUserImage(uploadedImage); // Set the uploaded image as the user icon image
      setDisplayUploader(false); // Close the image uploader
    };

    const handleDeleteProfilePicture = () => {
      setUserImage(null); // Delete the profile picture
    };

    const handleDarkMode = () => {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        document.querySelector('.company-information-page').style.backgroundColor = '#000'; // Change background color to black
        setDisplay(false); // Close the setting options overlay
    };
    
    
    const handleLightMode = () => {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#333';
        document.querySelector('.company-information-page').style.backgroundColor = '#fff';
        setDisplay(false); // Close the setting options overlay
    };
    

    const handleNotDisplay = () => {
        // Close the setting options overlay
        setDisplay(false);
    };

    const handleDisplay = () => {
        // Display the setting options overlay
        setDisplay(true);
    };
    const handleOrganizationNameChange = (e) => {
      const name = e.target.value;
      setOrganizationName(name);
      if (name.length > 0) {
        // Update user icon image based on the first character of organization name
        const firstChar = name.charAt(0).toUpperCase();
        
        const imageSrc = `https://via.placeholder.com/80x80?text=${firstChar}`;
        setUserImage(imageSrc);
      } else {
        setUserImage({userLgSvg}); // Default image if no name entered
      }
    };
  


    return (
      <div className="company-information-page">
        <div className="company-information-page-child" />
        <img
          className="white-variation-1"
          alt=""
          src={whiteVariationSvg}
         
        />
        <img className="user-5-1" alt="" src={userImage ? userImage : userLgSvg} />
        <img className="user-5-2" alt="" src={userImage ? userImage : userLgSvg}/>
        <b className="beyos">BeyOS</b>
        <img className="settings-1-icon" alt="" src={settingsSvg} onClick={handleDisplay} />
        
        <div className="organization-name">Organization Name</div>
        <div className="registered-address">{`Registered Address* `}</div>
        <div className="no-of-employees">No. of Employees*</div>
        <div className="website">Website</div>
        
        <div className="nature-of-business">Nature of Business</div>
        
        <div className="sector">Sector</div>
        
        <div className="currency-in-which">
          Currency in which financial disclosures are made ?*
        </div>
        {displayUploader && <ImageUploader handleImageUpload={handleImageUpload} handleUploaderClose={handleUploaderClose} handleDeleteProfilePicture={handleDeleteProfilePicture}  />}
        {!displayUploader && <img className="edit-1-icon" alt="" src={editIconSvg} onClick={handleEditIconClick} />}
        
        <div className="general-description-of">
          General Description of the Organization*
        </div>
        <div className="company-information-page-child6" />
        <img className="add-1-icon" alt="" src={addIconSvg} />
        <b className="next">NEXT</b>
        <div className="enter-name-of">
        
        <input
          className="company-information-page-inner"
          type="text"
          placeholder="Enter Name of the Organization"
          value={organizationName}
          onChange={handleOrganizationNameChange}
        />
        </div>
        <div>
          <textarea className="description"
            type="text"
            placeholder="Description..."></textarea>
        </div>
        <div>
          <textarea className="rectangle-div"
            type="text"
            placeholder="Address*"></textarea>
        </div>
        <div>
          <input
            className="company-information-page-child4"
            type="text"
            placeholder="Select the Sector Your Business Belongs to"
          />
        </div>
        <div>
          <input
            className="company-information-page-child2"
            type="text"
            placeholder="Website"
          />
        </div>
        <div>
          <input
            className="company-information-page-child3"
            type="text"
            placeholder="Select the Nature of your Business"
          />
        </div>
        <div>
          <input
            className="company-information-page-child5"
            type="text"
            placeholder="Currency"
          />
        </div>
        <div >
          <input
            className="company-information-page-child1"
            type="text"
            placeholder="Enter no.of employees"
          />

        </div>
        {display && <SettingOption handleDarkMode={handleDarkMode} handleLightMode={handleLightMode} handleNotDisplay={handleNotDisplay} />}
      </div>
    );
};

export default CompanyInfo;
