// import Button1 from "./components/MyButton";
import { Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Centerbar from "./components/Centerbar";
import AddPosts from "./components/AddPosts";

// import Modals from "./components/MyModal"

function App() {
  return (
    <>
      <div>
        {/* <Button1 /> */}
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Sidebar />
          <Centerbar />
          <Rightbar />
        </Stack>
        <AddPosts />


        {/* <Modals /> */}


      </div>
    </>
  )
}

export default App