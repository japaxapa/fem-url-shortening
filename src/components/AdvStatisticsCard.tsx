import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";

interface IAdvStatisticsCardProps {
  title: string;
  paragraph: string;
  imageUrl: string;
  separator?: boolean;
}

export default function AdvStatisticsCard({
  title,
  paragraph,
  imageUrl,
  separator,
}: IAdvStatisticsCardProps) {
  return (
    <Stack alignItems={"center"}>
      <Box
        height={"6rem"}
        width={"1rem"}
        bgcolor={separator ? "primaryCyan.main" : "neutralGViolet.main"}
      />
      <Paper
        elevation={0}
        sx={{
          padding: "0 2rem 2rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          variant="circular"
          src={imageUrl}
          alt="brand recognition icon"
          sx={{
            bgcolor: "primaryDViolet.main",
            height: "6rem",
            width: "6rem",
            transform: "translateY(-3rem)",
          }}
          imgProps={{ style: { objectFit: "scale-down" } }}
        />
        <Typography
          variant="h4"
          sx={{ fontWeight: "800", marginBottom: "2rem", fontSize: "1.8rem" }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: "neutralGray.main", fontSize: "1.1rem" }}>
          {paragraph}
        </Typography>
      </Paper>
    </Stack>
  );
}
