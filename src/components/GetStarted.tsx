import { Box, Button, Stack, Typography } from "@mui/material";

export default function GetStarted() {
  return (
    <Stack
      direction={"column"}
      sx={{ overflow: "hidden" }}
    >
      <Box
        component={"img"}
        src="/images/illustration-working.svg"
        alt="image of an office worker"
        sx={{ transform: "translateX(4rem)" }}
      />
      <Stack
        alignItems={"center"}
        marginY={"2rem"}
        padding={"1rem"}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "2.7rem",
            fontWeight: "800",
            lineHeight: 1,
            color: "neutralVDViolet.main",
          }}
        >
          More than just shorter links
        </Typography>
        <Typography
          marginY={"1.5rem"}
          sx={{
            color: "neutralGray.main",
            fontWeight: "500",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
          Build your brand's recognition and get detailed insights on how your
          links are performing.
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
    </Stack>
  );
}
