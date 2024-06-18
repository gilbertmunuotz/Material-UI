import { Box } from "@mui/material"

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <h1>Hello</h1>
      </Box>
    </Box>
  )
}

export default Rightbar