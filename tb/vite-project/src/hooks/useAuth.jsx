import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";
import { set } from "dot-object";

const useAuth = () => {
    const isRun = useRef(false);
    const [token, setToken] = useState(null);
    const [isLogin, setLogin] = useState(false);
    useEffect(() => {
        if (isRun.current) return;

        isRun.current = true;
        const client = new Keycloak({
            url: 'http://localhost:8090/',
            realm: 'tbrealm',
            clientId: 'tbclient',
        });
        client.init({ onLoad: "login-required" }).then((authenticated) => {
            setLogin(authenticated);
            setToken(client.token);
        });
    }, []);

    return [isLogin, token];
};

export default useAuth;