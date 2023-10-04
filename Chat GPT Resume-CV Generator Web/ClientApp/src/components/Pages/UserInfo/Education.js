import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Education() {
    return (
        <Card>
            <CardHeader action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }/>
            <CardContent>
                <Typography variant="h5" component="div">
                    test
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is a simple Material-UI card.
                </Typography>
            </CardContent>
        </Card>
        );
}
export default Education;