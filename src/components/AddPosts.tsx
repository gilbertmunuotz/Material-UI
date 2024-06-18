import { Fab, Tooltip } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function AddPosts() {
  return (
    <Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left: 15 }}>
      <Fab color="primary">
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}

export default AddPosts