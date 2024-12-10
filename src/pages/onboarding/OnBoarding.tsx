import React, { useState } from "react";
import "./style/styel.css";
import Particals from "./comp/part";
import { useAppSelector } from "@/publicStore/store/store";
import { useNavigate } from "react-router-dom";

export default function OnBoarding() {
  const [keyInput, setKeyInput] = useState<string>("");
  const address = localStorage.getItem("address");
  const navigate = useNavigate();

  const requestSchoolInfo = () => {
    if (keyInput === "" || keyInput === null || keyInput === undefined) {
      alert("ادخل المفتاح");
      return;
    }
    fetch(`http://${address}http/school/schoolCheck`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        schoolKey: keyInput,
      }),
    })
      .then((res) => {
        console.log(res.status);
        if (res.status !== 200) {
          alert("لا يوجد مستخدم يحمل هاذا المفتاح");
        }
        if (res.status === 200) {
          console.log("starting the navigation");
          localStorage.setItem("key", `${keyInput}`);
          localStorage.setItem("onboarding", "yay");
          navigate("/home");
        }
        return res.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Particals />
      <div className="register">
        <h2 className="register_title">ادخل مفتاح التسجيل</h2>
        <input
          onChange={(val) => setKeyInput(val.target.value)}
          value={keyInput}
          className="register_input_key"
          type="text"
          placeholder="ادخل المفتاح"
        />
        <input
          type="button"
          onClick={() => requestSchoolInfo()}
          className="button"
          value={"تسجيل"}
        />
      </div>
    </div>
  );
}
