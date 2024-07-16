import { MenuItem, Stack, Button, Menu, Icon, } from '@mui/material';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const NavBar = () => {
const { t, i18n } = useTranslation();

const changeLanguage = (lng: string) => {
    setAnchorEl(null);
    i18n.changeLanguage(lng);
};

const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
return (
<Stack 
    justifyContent='space-between' 
    direction='row' alignItems='center' 
    paddingX={3} 
    paddingY={2} 
    style={{backgroundColor: '#3d3b3b', color: 'whitesmoke'}}
    >
    <Stack spacing={2} direction='row'>
        <Button 
            variant="contained" 
            component={RouterLink} 
            to="/" 
            style={{textTransform: 'none'}}
        >
            {t('main')}
        </Button>
        <Button 
            variant="contained" 
            component={RouterLink} 
            to="/about" 
            style={{textTransform: 'none'}}
        >
            {t('about')}
        </Button>
        <Button 
            variant="contained" 
            component={RouterLink} 
            to="/contacts" 
            style={{textTransform: 'none'}}
        >
            {t('contacts')}
        </Button>
    </Stack>
    <Button
        onClick={handleClick}
      >
        <Icon component={GTranslateIcon} style={{ color: 'whitesmoke' }}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage("fr")}>Français</MenuItem>
        <MenuItem onClick={() => changeLanguage("es")}>Español</MenuItem>
      </Menu>
    </Stack>
)
}

export default NavBar
