import { Button, IconButton, Stack, Typography } from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Pinterest as PinterestIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Stack
      alignItems={"center"}
      padding={"3rem"}
      bgcolor={"neutralVDViolet.main"}
    >
      <Typography
        variant="h2"
        color="white"
        fontWeight={600}
        fontSize={"2.5rem"}
        paddingBottom={"1rem"}
      >
        Shortly
      </Typography>
      <Stack>
        <Typography
          variant="h6"
          color="white"
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            marginY: "1rem",
          }}
        >
          Features
        </Typography>
        <Button sx={{ color: "silver", padding: ".2rem" }}>
          Link Shortening
        </Button>
        <Button sx={{ color: "silver", padding: ".2rem" }}>
          Branded Links
        </Button>
        <Button sx={{ color: "silver", padding: ".2rem" }}>Analytics</Button>
      </Stack>

      <Stack>
        <Typography
          variant="h6"
          color="white"
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            marginY: "1rem",
          }}
        >
          Resources
        </Typography>
        <Button sx={{ color: "silver", padding: ".2rem" }}>Blog</Button>
        <Button sx={{ color: "silver", padding: ".2rem" }}>Developers</Button>
        <Button sx={{ color: "silver", padding: ".2rem" }}>Support</Button>
      </Stack>

      <Stack>
        <Typography
          variant="h6"
          color="white"
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            marginY: "1rem",
          }}
        >
          Company
        </Typography>
        <Button sx={{ color: "silver", padding: ".2rem" }}>About</Button>
        <Button sx={{ color: "silver", padding: ".2rem" }}>Our Team</Button>
        <Button sx={{ color: "silver", padding: ".2rem" }}>Careers</Button>
        <Button sx={{ color: "silver", padding: ".2rem" }}>Contact</Button>
      </Stack>

      <Stack
        direction={"row"}
        width={"50%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginTop={"2rem"}
      >
        <IconButton>
          <FacebookIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <TwitterIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <PinterestIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{ color: "white" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
}
