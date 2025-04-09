import { Typography, Link, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ mt: 8, mb: 4 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
