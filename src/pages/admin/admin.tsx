import React from "react";
import AdminPanel from "./admin-panel";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function Admin() {
  const handleLoginSuccess = async (tokenResponse) => {
    const accessToken = tokenResponse.access_token;

    // Use the access token to fetch Google Analytics data
    // Call Google Analytics API using the accessToken
  };
  return (
    <GoogleOAuthProvider clientId="853994114702-r5hi3u2klp23eha54t9409tocfof1ns2.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />

      <AdminPanel />
    </GoogleOAuthProvider>
  );
}
