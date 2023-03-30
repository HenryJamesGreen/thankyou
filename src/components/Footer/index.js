/* eslint-disable */
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import './Footer.css'

// icons
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {

  return (

    <BottomNavigation sx={{ height: 110 , width: 500 , flexGrow: 1, m: 1, width: "80vw", margin: "auto", backgroundColor: "rgba(0,0,0,0.5)", marginTop: "300px" }} >
      <div className='footer-div'>
        <div className='credit-div'><BuildCircleIcon />
          <h4 className='footer-text'>  
            A Poképod Production
          </h4>
        </div>
      <div className='second-row'>
        <h4 className='link-div'> 
        <h4 className='second-text'> <GitHubIcon className="git-icon"/> Oh you wanna see the repo?
          <a className='link' href="https://github.com/HenryJamesGreen/thankyou">
            Go on then. Nerds.
          </a></h4>
        </h4>
      </div>
    </div>
    </BottomNavigation>
  );
}

export default Footer


/* 
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
value={value} onChange={handleChange}
<BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />

*/