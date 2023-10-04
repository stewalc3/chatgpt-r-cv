import { useNavigate } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function CustomListItem({ path, children,text }) {
    const navigate = useNavigate();   
    const navigateTo = function (a) {
        navigate(path);
    }
    return (
        <div onClick={navigateTo}>
            <ListItemButton>
                <ListItemIcon>
                    {children}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </div>
    );
}
