import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface NavigationBarProps {
  onMenuClick: () => void;
}

export default function NavigationBar({ onMenuClick }: NavigationBarProps) {
  return (
    <AppBar
      position="static"
      color="white"
      sx={{ width: "100%", padding: "1rem" }}
      elevation={0}
    >
      <Toolbar>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "2rem",
              fontWeight: "800",
              color: "neutralVDViolet.main",
            }}
          >
            Shortly
          </Typography>
          <IconButton
            sx={{ height: "2rem", width: "2rem" }}
            onClick={onMenuClick}
          >
            <MenuIcon sx={{ height: "2rem", width: "2rem" }} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
