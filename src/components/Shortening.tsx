import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { BaseSyntheticEvent, useState } from "react";

export default function Shortening() {
  const [longURL, setLongURL] = useState("");
  const [error, setError] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [urls, setUrls] = useState<{ longURL: string; shortURL: string }[]>([
    { longURL: "test", shortURL: "test" },
  ]);

  const handleChange = (e: BaseSyntheticEvent) => {
    setLongURL(e.target.value);
  };

  async function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault();
    if (!longURL) {
      setError(true);
      return;
    }
    try {
      setError(false);
      console.log({ longURL });
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
          if (data.errors) {
            throw new Error(
              `You have these errors in the request ${data.message}`
            );
          } else {
            const newUrls = [...urls];
            newUrls.push({ longURL: data.long_url, shortURL: data.link });
            setUrls(newUrls);
          }
        });
    } catch (e) {
      console.error(e);
    }
  }

  const handleCopy = async (index: number) => {
    try {
      await navigator.clipboard.writeText(urls[index].shortURL);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    } finally {
      setActive(index);
    }
  };

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
                border: error ? "2px solid red" : "",
              }}
              value={longURL}
              onChange={handleChange}
              error={error}
              helperText={error ? "Please add a link" : ""}
              slotProps={{
                htmlInput: { sx: { top: 4 } },
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
              onClick={handleSubmit}
            >
              Shorten it!
            </Button>
          </Box>

          {urls.map((url, index) => (
            <Paper
              sx={{ marginTop: "1.5rem", padding: "1rem" }}
              elevation={0}
              key={`${url.longURL}-${index}`}
            >
              <Typography sx={{ textAlign: "start" }}>{url.longURL}</Typography>
              <Divider sx={{ marginY: "1rem" }} />
              <Typography
                color="primaryCyan.main"
                sx={{ textAlign: "start", marginBottom: "1rem" }}
              >
                {url.shortURL}
              </Typography>
              <Button
                sx={{
                  bgcolor:
                    active === index
                      ? "primaryDViolet.main"
                      : "primaryCyan.main",
                  color: "white",
                  width: "100%",
                  borderRadius: ".5rem",
                  paddingY: ".7rem",
                }}
                onClick={() => handleCopy(index)}
              >
                {active === index ? "Copied!" : "Copy"}
              </Button>
            </Paper>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
