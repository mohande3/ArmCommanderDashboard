import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";

function IsAuthenticatedCom() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!AuthService.IsAuthenticated()) {
      toast.error("لطفا ابتدا لاگین کنید . ");
      navigate("/login");
      return;
    }
  }, []);
  return <></>;
}

export default IsAuthenticatedCom;
