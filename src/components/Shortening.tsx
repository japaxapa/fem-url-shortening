import { Box, Button, Stack, TextField } from "@mui/material";

export default function Shortening() {
  return (
    <Stack>
      <Box sx={{ height: "8rem" }}></Box>
      <Stack
        sx={{ bgcolor: "neutralGViolet.main", padding: "2rem 2rem 0 2rem" }}
      >
        <Stack sx={{ transform: "translateY(-8rem)" }}>
          <Box
            sx={{
              backgroundImage: `url("/images/bg-boost-${"mobile"}.svg")`,
              backgroundRepeat: "no-repeat",
              bgcolor: "primaryDViolet.main",
              padding: "2rem",
              borderRadius: "1rem",
            }}
          >
            <TextField
              id="shortenLink"
              label={"Shorten a link here..."}
              variant="outlined"
              sx={{
                width: "100%",
                bgcolor: "white",
                marginBottom: "1rem",
                borderRadius: ".5rem",
              }}
            />
            <Button
              sx={{
                bgcolor: "primaryCyan.main",
                color: "white",
                width: "100%",
                borderRadius: ".5rem",
                paddingY: ".7rem",
              }}
            >
              Shorten it!
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
