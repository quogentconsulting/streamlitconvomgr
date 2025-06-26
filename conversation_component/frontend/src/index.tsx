import React from "react";
import ReactDOM from "react-dom";
import { Streamlit, withStreamlitConnection } from "@streamlit/component-lib";
import ConversationManager from "./ConversationManager";

const StreamlitConversationManager = withStreamlitConnection(ConversationManager);

ReactDOM.render(
  <React.StrictMode>
    <StreamlitConversationManager />
  </React.StrictMode>,
  document.getElementById("root")
);

Streamlit.setComponentReady();
Streamlit.setFrameHeight(0);
