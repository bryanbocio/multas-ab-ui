import { useContext, useEffect } from "react";
import Agents from "../../components/agents/Agents";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { hasMultipleRoles } from "../../utils/Roles";
import { useNavigate } from "react-router-dom";

const CheckAgent = () => {
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
      <Agents />
    </div>
  );
};

export default CheckAgent;
