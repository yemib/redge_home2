

import axios from "axios";

import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';



export const AuthContext = createContext();

const API_URL = /* "https://totalcarebankend.codingpro.website/api" ;  */     "http://127.0.0.1:8000/api";
const APPNAME = process.env.APPNAME || "TOTALCARE";


const api = axios.create({
  baseURL: API_URL,
  headers: {

    "Content-Type": "application/json"


  },
});

// Add Axios interceptor to include token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const toNaira = (amount) => {
  if (amount === null || amount === undefined || amount === "") return "₦0";

  const num = Number(amount);
  if (isNaN(num)) return "₦0";

  return num.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });
};


export const AuthProvider = ({ children }) => {

    let check_theme = localStorage.getItem("theme");
  const [theme, setTheme] = useState( (check_theme !=  null) ? localStorage.getItem("theme") : "dark");


  const [token, setToken] = useState(localStorage.getItem("token"));
  const [verified, setVerified] = useState(localStorage.getItem('verified'));

  let check_user = localStorage.getItem("user");

  const [User, setUser] = useState((check_user != null && check_user != "undefined") ? JSON.parse(localStorage.getItem("user")) : null);


  const router = useNavigate();
  //alert(JSON.stringify(token)); 

  const  changetheme = (type)=>{
      localStorage.setItem("theme"  , type)
      setTheme(type);

  }

  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setToken(token); // 🔁 Trigger re-render
    setUser(user);
  };


  


  const kycchange = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    // 🔁 Trigger re-render
    setUser(user);
  };

  const changeverify = (verify) => {
    localStorage.setItem("verified", verify);
    setVerified(verify);
  };
  const logout = async () => {

     //logout from server as well  
   /* let response  = */ await api.post(`${API_URL}/auth/logout`, { token: token })

    //showAlert('success'  ,  'success'  ,  response.data.message);


    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("verified");


    setToken(null);
    setUser(null);

    setVerified(null);
    router("/login");

    // broadcast logout to other tabs
    try {
      localStorage.setItem('logout', Date.now().toString());
      // remove shortly after to avoid accumulating values
      setTimeout(() => {
        try { localStorage.removeItem('logout'); } catch (e) { }
      }, 1000);
    } catch (e) {
      console.warn('Failed to broadcast logout to other tabs', e);
    }
    //send a link 

  };

  const checkauthentication = () => {

    const token = localStorage.getItem("token");
    if (!token || token == "undefined" || token == "null") {
      /* router("login"); */
    }
  }



  return (
    <AuthContext.Provider value={{ token, User,  theme ,  changetheme  , login, logout, kycchange, checkauthentication, changeverify }}>

      {children}

    </AuthContext.Provider>
  )

};



export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};


export const formatTime = (input) => {
  if (input === null || input === undefined || input === "") return "";

  let date;
  if (input instanceof Date) {
    date = input;
  } else if (typeof input === "number") {
    date = new Date(input);
  } else if (typeof input === "string") {
    // Accept "HH:MM" or "HH:MM:SS"
    const hhmm = input.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
    if (hhmm) {
      const h = Number(hhmm[1]);
      const m = Number(hhmm[2]);
      const s = hhmm[3] ? Number(hhmm[3]) : 0;
      date = new Date();
      date.setHours(h, m, s, 0);
    } else {
      const parsed = Date.parse(input);
      if (!isNaN(parsed)) date = new Date(parsed);
      else return "";
    }
  } else {
    return "";
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};


export const Stars = ({ value = 0, size = 18 }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;

  return (
    <span style={{ color: "#ffc107", fontSize: size }}>
      {"★".repeat(full)}
      {half && "☆"}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
};


export function showAlert(status = "success", title = "Success!", message = "Operation completed successfully.", timer = 5000) {
  // Determine icon and default title based on status
  const icons = {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info",
    question: "question"
  };

  const defaultTitles = {
    success: "Success!",
    error: "Error!",
    warning: "Warning!",
    info: "Info",
    question: "Confirm"
  };

  Swal.fire({
    icon: icons[status] || "info",
    title: title || defaultTitles[status],
    text: message,
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: true,
  });
}






export default api;
export { API_URL, APPNAME };

