import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Catalogo from "./scenes/catalogo";
import Roles from "./scenes/roles/roles";
import Ventas from "./scenes/ventas";
import Permisos from "./scenes/permisos/permisos";
import Categoria from "./scenes/categoria/categoria";
import Citas from "./scenes/citas/citas";
import Insumo from "./scenes/insumos/insumo";
import Prenda from "./scenes/prenda/prenda";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/categoria" element={<Categoria />} />
              <Route path="/cita" element={<Citas />} />
              <Route path="/insumo" element={<Insumo />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/permisos" element={<Permisos />} />
              <Route path="/prenda" element={<Prenda />} />
              <Route path="/ventas" element={<Ventas />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
