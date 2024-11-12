import { Box, Button, Stack, TextField } from "@mui/material";
import { BaseSyntheticEvent, useState } from "react";

export default function Shortening() {
  const [longURL, setLongURL] = useState("");

  const handleChange = (e: BaseSyntheticEvent) => {
    setLongURL(e.target.value);
  };

  async function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault();
    await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_BITLY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: longURL,
        domain: "bit.ly",
        group_guid: `${import.meta.env.VITE_REACT_APP_GUID}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
      });
  }

  return (
    <Stack>
      <Box sx={{ height: "8rem" }} />
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
              variant="filled"
              color="black"
              sx={{
                width: "100%",
                bgcolor: "white",
                marginBottom: "1rem",
                borderRadius: ".5rem",
              }}
              value={longURL}
              onChange={handleChange}
            />
            <Button
              sx={{
                bgcolor: "primaryCyan.main",
                color: "white",
                width: "100%",
                borderRadius: ".5rem",
                paddingY: ".7rem",
              }}
              onClick={handleSubmit}
            >
              Shorten it!
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
