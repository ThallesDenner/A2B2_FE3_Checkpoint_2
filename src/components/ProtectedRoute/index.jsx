import { Navigate, Outlet } from "react-router-dom";
import { useAPIDataContext } from "../../contexts/APIDataContext";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  // useAPIDataContext retorna um objeto que contém variáveis de estado e funções que atualizam parte do objeto de estado
  const { isLogged } = useAPIDataContext();

  if (!isLogged) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;