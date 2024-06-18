import { AppBar, Toolbar, Typography, styled } from '@mui/material'

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6">CYRA</Typography>
      </StyledToolBar>
    </AppBar>
  )
}

export default Navbar