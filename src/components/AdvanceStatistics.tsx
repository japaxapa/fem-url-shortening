import { Paper, Stack, Typography } from "@mui/material";
import AdvStatisticsCard from "./AdvStatisticsCard";
import { advStatsCardsInfo } from "../data/constants";

export default function AdvanceStatistics() {
  return (
    <Stack
      sx={{
        bgcolor: "neutralGViolet.main",
        padding: "0 2rem 8rem 2rem",
      }}
    >
      <Paper
        sx={{ bgcolor: "neutralGViolet.main" }}
        elevation={0}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "800", marginBottom: "2rem" }}
        >
          Advanced Statistcs
        </Typography>
        <Typography sx={{ color: "neutralGray.main", fontSize: "1.2rem" }}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Typography>
      </Paper>

      {advStatsCardsInfo.map((cardInfo, index) => (
        <AdvStatisticsCard
          imageUrl={cardInfo.imageUrl}
          paragraph={cardInfo.paragraph}
          title={cardInfo.title}
          separator={cardInfo.separator}
          key={`${cardInfo.title}-${index}`}
        />
      ))}
    </Stack>
  );
}
