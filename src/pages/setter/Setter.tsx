import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/HashLoader";
import { overDataAlltypes } from "../../lib/types/types";
import { updateData } from "../../publicStore/data/data";
import "./style/style.css";
import { useAppDispatch } from "@/publicStore/store/store";

export default function Setter() {
  console.log("setter");
  const address = localStorage.getItem("address");
  const key = localStorage.getItem("key");

  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(true);
  const [showOB, setShowOB] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const connectinos: any[] = [];

  const connectToServer = async () => {
    console.log("connecting to server");
    const dataws = new WebSocket(`ws://${address}/ws/school`);
    connectinos.push(dataws);
    if (connectinos.length > 1) {
      connectinos.map((singleConnection) => {
        singleConnection.close();
      });
    }
    const jsonKey = JSON.stringify({
      schoolKey: key,
    });
    dataws.onopen = () => {
      dataws.send(jsonKey);
    };
    dataws.onmessage = (event) => {
      let newData: null | overDataAlltypes = null;
      newData = JSON.parse(event.data);
      if (!newData) {
        return;
      }
      dispatch(updateData({ newData: newData }));
    };
    dataws.onclose = (event) => {
      connectToServer();
    };
    dataws.onerror = (event) => {
      connectToServer();
    };
  };

  const checkfisttime = async () => {
    let obVale = localStorage.getItem("obVale");
    try {
      if (!obVale || !key) {
        setLoading(false);
        navigate("/onboarding");
      } else {
        connectToServer();
        setLoading(false);
      }
    } catch (fError) {
      console.log(fError);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    checkfisttime();
  }, []);
  console.log(error);

  if (loading) {
    return (
      <div className="main_loading_container">
        <ClipLoader />
      </div>
    );
  }

  const navigatetohome = () => {
    navigate("onboarding");
  };
  return (
    <div className="main_setter_container">
      <ClipLoader />
      <Link to="/home">
        <h2>navigate to home</h2>
      </Link>
    </div>
  );
}
