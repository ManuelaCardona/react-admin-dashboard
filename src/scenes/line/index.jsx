// Line.jsx
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { mockLineDataVentas } from "../../data/mockData.js"; // Asegúrate de la ruta correcta

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Ventas por Fecha" />
      <Box height="75vh">
        <LineChart data={mockLineDataVentas} />
      </Box>
    </Box>
  );
};

export default Line;
