import './App.css';
import Navbar from './components/Navbar';
import Newtasks from './components/Newtasks';
import Tasklist from './components/Tasklist';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
   const[text,setText]=useState('');
    const[title,setTitle]=useState('');
    const[tasks,setTasks]=useState([]);
  const Home=()=>{
    return(
    <div style={{
          width: "900px",
          height: "474px",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center"
        }}>
          <div style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            gap: "20px"
          }}>
            <h1 style={{
  background: "linear-gradient(90deg, #007CF0 0%, #00DFD8 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
  fontSize: "2.5rem",
  marginBottom: "10px"
}}>
  TaskZee
</h1>
            <h3 style={{ color: "#333", marginBottom: "10px" }}>Trusted by Teams</h3>
            
            <div style={{
              display: "flex",
              gap: "20px",
            }}>
              <div style={{
                backgroundColor: "#f1f3f5",
                padding: "20px",
                borderRadius: "10px",
                width: "120px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}>
                <h4 style={{ margin: 0, color: "#333" }}>20K+</h4>
                <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>Users</p>
              </div>
              <div style={{
                backgroundColor: "#f1f3f5",
                padding: "20px",
                borderRadius: "10px",
                width: "120px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}>
                <h4 style={{ margin: 0, color: "#333" }}>100K+</h4>
                <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>Tasks</p>
              </div>
            </div>
          </div>
          <img
            style={{ height: "100%", width: "50%", borderRadius: "10px", padding: "3px",paddingRight:"7px",paddingBottom:"7px" }}
            src="https://media.istockphoto.com/id/1492645918/photo/survey-form-concept-businessman-using-laptops-do-online-checklist-surveys-questionnaire-with.jpg?s=612x612&w=0&k=20&c=lqbzWDBLxqRe99kOz2GwfWDRzkVduf2BvUzn1NBGh7Q="
            alt="illustration"
          />
        </div>
    );
  };
  return (
    <>
    <Router>
    <div
      style={{
        backgroundImage: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      className="App"
    >
      <div
        style={{
          height: "550px",
          width: "900px",
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/Tasklist" element={<Tasklist
          text={text}
        setText={setText}
        title={title}
        setTitle={setTitle}
        tasks={tasks}
        setTasks={setTasks} />} />
            <Route path="/Newtasks" element={<Newtasks
            text={text}
        setText={setText}
        title={title}
        setTitle={setTitle}
        tasks={tasks}
        setTasks={setTasks} />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </div>
    </Router>
    </>
  );
}

export default App;
