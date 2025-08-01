import React from 'react';

const Tasklist = ({ tasks }) => {
  return (
    <div style={{
      width: "900px",
      border: "none",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      padding: "20px"
    }}>
      <div className="accordion" id="accordionExample">
        {tasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666" }}>No tasks available.</p>
        ) : (
          tasks.map((task, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {task.title || `Task #${index + 1}`}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {task.text || "No description provided."}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tasklist;

