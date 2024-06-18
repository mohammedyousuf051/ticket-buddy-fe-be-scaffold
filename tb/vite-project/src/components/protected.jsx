import React, { useEffect, useRef } from "react";
import axios from "axios";

const Protected = ({ token }) => {
    const isRun = useRef(false);

    useEffect(() => {
        if (isRun.current) return;

        isRun.current = true;

        const config = {
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
        axios.get("documents", config).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);


    return (
        <div>
            <h1>Protected Page</h1>
        </div>
    );
}

export default Protected;