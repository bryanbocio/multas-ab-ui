import { useContext, useEffect } from "react";
import Drivers from "../../components/drivers/Drivers";
import { AuthContextType } from "../../context/AuthContextType";
import { AuthContext } from "../../context/authContext";
import { hasMultipleRoles } from "../../utils/Roles";
import { useNavigate } from "react-router-dom";

const CheckDriver = () => {
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const role = hasMultipleRoles(currentUser.role);
  const navigate = useNavigate();
  useEffect(() => {
    if (role != "ADMIN") {
      navigate("/home");
    }
  }, []);
  return (
    <div>
      <Drivers />
    </div>
  );
};

export default CheckDriver;
