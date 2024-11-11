import { Button, Stack, Typography } from "@mui/material";

export default function Boost() {
  return (
    <Stack
      alignItems={"center"}
      sx={{
        bgcolor: "primaryDViolet.main",
        backgroundImage: `url(/images/bg-boost-${"mobile"}.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "6rem 2rem 5rem 2rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: 700,
          fontSize: "2rem",
          paddingBottom: "1.5rem",
        }}
      >
        Boost your links today
      </Typography>

      <Button
        sx={{
          bgcolor: "primaryCyan.main",
          color: "white",
          width: "50%",
          borderRadius: "20rem",
          paddingY: ".7rem",
        }}
      >
        Get Started
      </Button>
    </Stack>
  );
}
