import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import HomeIon from "@mui/icons-material/Home";
import { CloudUpload, DeleteForever } from "@mui/icons-material";

function MyButton() {

    const VisuallyHiddenInput = styled('input')({
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <div className="mt-3 space-x-2">
            <Button variant="text">Click Me</Button>
            <Button variant="contained">Click Me</Button>
            <Button variant="outlined">Click Me</Button>
            <Button size="medium">Primary</Button>
            <Button disabled>Disabled</Button>
            <Button variant="contained" startIcon={<HomeIon />}>Home</Button>
            <Button variant="contained" startIcon={<DeleteForever />} color="error">Delete</Button>
            <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUpload />}>
                Upload File<VisuallyHiddenInput type="file"></VisuallyHiddenInput>
            </Button>
        </div>
    )
}

export default MyButton;

// sx=style extension