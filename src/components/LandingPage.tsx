import { Stack } from "@mui/material";
import GetStarted from "./GetStarted";
import Shortening from "./Shortening";
import AdvanceStatistics from "./AdvanceStatistics";
import Boost from "./Boost";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <Stack direction={"column"}>
      <GetStarted />
      <Shortening />
      <AdvanceStatistics />
      <Boost />
      <Footer />
    </Stack>
  );
}
