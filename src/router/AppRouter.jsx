import { Route, Routes } from "react-router";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../app/routes/JournalRoutes";

export const AppRouter = () => {


  return (
    <Routes>

      {/* Login and Register */}
      <Route path="/auth/*" element={ <AuthRoutes/> } />

      {/* App */}
      <Route path="/*" element={ <JournalRoutes/> } />

    </Routes>
  );

};
