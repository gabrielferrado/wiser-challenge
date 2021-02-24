import React, { useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import Head from "next/head";
import { Api } from "@/services/api";
import { useDispatch } from "react-redux";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const payload = await Api.getUsers();
      dispatch({ type: "SET_USERS", payload });
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Wiser</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{ flex: 1, position: "relative" }}>
        <LoginForm />
      </div>
    </>
  );
};

export default Home;
