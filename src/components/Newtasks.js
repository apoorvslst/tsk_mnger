import React,{useState} from 'react'

const Newtasks = ({ text, setText, title, setTitle, tasks, setTasks }) => {
  const handleCancel=()=>{
    setText('');
    setTitle('');
  }
  const handleAdd=()=>{
    if (title && text) {
      const newTask = { title, text };
      setTasks([newTask, ...tasks]);
      setTitle('');
      setText('');
    }
  };
   const handleonchangetitle=(event)=>{
        setTitle(event.target.value);
    }
  const handleonchange=(event)=>{
        setText(event.target.value);
    }
  return (
    <div style={{
      width: "900px",
      height: "474px",
      border:"none",
      borderRadius:"10px",
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
        <h3 style={{
  background: "linear-gradient(90deg, #0090f0ff 0%, #6dc6f2ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
  fontSize: "2.5rem",
  marginBottom: "10px"
}}>
  Add New Task
</h3>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter Title</label>
  <input type="email" value={title} onChange={handleonchangetitle} className="form-control" id="exampleFormControlInput1" placeholder="Study about DevOPs"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Description</label>
  <textarea value={text} onChange={handleonchange} className="form-control" id="exampleFormControlTextarea1" rows="3" cols="35"></textarea>
</div>
<div style={{
  display:"flex",
  flexDirection:"row",
  alignContent: "center",
  justifyContent: "center"
}}>
  <button onClick={handleCancel} type="button" className="btn btn-danger me-3">Cancel</button>
  <button onClick={handleAdd} type="button" className="btn btn-primary"> Add </button> 
</div>
      </div>
      <img
  src="https://img.freepik.com/premium-vector/productivity-boosting-concept-enhancing-work-pace-efficiency-with-smart-time-management-goal_277904-30403.jpg?semt=ais_hybrid&w=740&q=80"
  style={{
    height: "100%",
    width: "50%",
    borderRadius: "10px",
    padding: "3px",
    paddingRight: "7px",
    paddingBottom: "7px"
  }}
  alt="Illustration"
/>
    </div>
  )
}

export default Newtasks
