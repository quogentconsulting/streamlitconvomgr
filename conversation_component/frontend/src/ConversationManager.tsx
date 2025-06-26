import React from "react";
import { Streamlit } from "@streamlit/component-lib";

export interface ConversationManagerProps {
  conversations: string[];
  style: { [key: string]: any };
}

export const ConversationManager = ({ conversations, style }: ConversationManagerProps) => {
  const handleSelect = (name: string) => {
    Streamlit.setComponentValue({ event: "select", name });
  };

  const handleRename = (name: string) => {
    const newName = window.prompt("Rename conversation", name);
    if (newName && newName !== name) {
      Streamlit.setComponentValue({ event: "rename", name, newName });
    }
  };

  const handleDelete = (name: string) => {
    if (window.confirm(`Delete conversation '${name}'?`)) {
      Streamlit.setComponentValue({ event: "delete", name });
    }
  };

  return (
    <div style={{ fontFamily: style.font_family, color: style.font_color }}>
      {conversations.map((name) => (
        <div key={name} style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: style.accent_color,
              cursor: "pointer",
              marginRight: 4,
            }}
            onClick={() => handleSelect(name)}
          >
            {name}
          </button>
          <span
            style={{ cursor: "pointer", marginLeft: 4 }}
            onClick={() => handleRename(name)}
          >
            ✏️
          </span>
          <span
            style={{ cursor: "pointer", marginLeft: 4 }}
            onClick={() => handleDelete(name)}
          >
            🗑️
          </span>
        </div>
      ))}
    </div>
  );
};

export default ConversationManager;
