

class Auth {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.userEmail = "";
  }

  userProfile;

  login = async () => {
    let auth2 = await window.gapi.auth2.getAuthInstance();
     //console.log("auth2", auth2);
    await auth2.signIn();
    let authResult = await auth2.currentUser.get().getAuthResponse();
    console.log("authResult", authResult);
    
    if(authResult.expires_at){
        let expiresAt = authResult.expires_at*0.001 + 2600000
      localStorage.setItem("expires_at", expiresAt);
       console.log("localStorage", localStorage);
      
      // console.log("time ", iamToken.data.expires_in);
      // console.log("getBasicProfile",auth2.currentUser.get().getBasicProfile())
      
    } else {
      alert("You dont have access to this site.");
      
    }
    await auth2.disconnect();
  };

  handleAuthentication(props) {
    console.log("handleAuthentication()");
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        // Run the Init method in the provider
        props.init();
      } else if (err) {
        console.log(err);
        alert(`Error: ${err.error}. You dont have access to this site.`);
      }
    });
  }

  setSession(authResult) {
    // this.userEmail = authResult.idTokenPayload.email;
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 400 + Math.floor(Date.now() / 1000)
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    localStorage.setItem("user_email", authResult.idTokenPayload.email);
    // navigate to the home route
    console.log("localStorage", localStorage);
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("user_email");
    // navigate to the home route
    
  }

  isAuthenticated() {
    console.log("isAuthenticated is callled");
    if (!localStorage.getItem("expires_at")) {
      return false;
    }
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    let thisDate = Math.floor(Date.now() / 1000);
    let result = thisDate < expiresAt ? true : false;
    // console.log("thisDate", thisDate);
    // console.log("expiresAt", expiresAt);

    return result;
  }

}

export default Auth;
