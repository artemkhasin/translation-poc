import React from 'react';
import { MenuItem, Select, Stack, Button, } from '@mui/material';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
const { t, i18n } = useTranslation();

const changeLanguage = (lng: string) => {
i18n.changeLanguage(lng);

};
return (
<Stack 
    justifyContent='space-between' 
    direction='row' alignItems='center' 
    paddingX={6} 
    paddingY={1} 
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
    <Select 
        variant='standard'
        onChange={(e) => changeLanguage(e.target.value as string)}
        IconComponent={() => <GTranslateIcon style={{ color: 'whitesmoke' }}/>}
        value={''}
    >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fr">Français</MenuItem>
        <MenuItem value="es">Español</MenuItem>
    </Select>
    </Stack>
)
}

export default NavBar
