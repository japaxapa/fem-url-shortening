import { Button, Divider, Stack } from "@mui/material";

export default function FloatingMenu() {
  return (
    <Stack
      sx={{
        marginX: "1.5rem",
        bgcolor: "primaryDViolet.main",
        borderRadius: "1rem",
        paddingY: "2rem",
        position: "absolute",
        width: "calc(100% - 3rem)",
        top: "5rem",
        zIndex: 1,
        alignItems: "center",
      }}
    >
      <Button
        sx={{
          color: "white",
          fontWeight: "bold",
          paddingY: ".6rem",
          fontSize: "1.2rem",
        }}
      >
        Features
      </Button>
      <Button
        sx={{
          color: "white",
          fontWeight: "bold",
          paddingY: ".6rem",
          fontSize: "1.2rem",
        }}
      >
        Pricing
      </Button>
      <Button
        sx={{
          color: "white",
          fontWeight: "bold",
          paddingY: ".6rem",
          fontSize: "1.2rem",
        }}
      >
        Resources
      </Button>
      <Divider
        orientation="horizontal"
        sx={{
          display: "block",
          height: "1px",
          border: "0",
          borderTop: "1px solid darkGray",
          margin: "1rem 2rem",
          padding: "0",
          width: "calc(100% - 4rem)",
        }}
      />
      <Button
        sx={{
          color: "white",
          fontWeight: "bold",
          paddingY: ".6rem",
          fontSize: "1.2rem",
        }}
      >
        Login
      </Button>
      <Button
        sx={{
          bgcolor: "primaryCyan.main",
          color: "white",
          width: "90%",
          borderRadius: "20rem",
          paddingY: ".7rem",
          marginTop: ".6rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Sign Up
      </Button>
    </Stack>
  );
}
