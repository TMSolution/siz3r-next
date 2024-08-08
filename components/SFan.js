import { Box } from "@mui/material";

export default function SFan() {
  let repetitions = 3;

  return (
    <Box
      sx={{
        position: "relative",
        justifySelf: "center",
        height: "100%",
        display: {md:"flex",xs:"none"},
      }}>
      {[...Array(repetitions)].map((_, index) => (
        <Box
          component="img"
          src="/photos/sInv.png"
          key={index}
          sx={{
            position: "absolute",
            right: index * -120+ -180,
            top: { lg: "-25vh", md: "-22vh" },
            height: { lg: "50vh", md: "45vh" },

            filter: `brightness(${(150 * index) / repetitions}%) invert(100%) `,
            zIndex: repetitions - index,
            rotate: `-20deg`,
          }}
        />
      ))}
    </Box>
  );
}
