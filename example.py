import streamlit as st
from conversation_component import conversation_manager

st.title("Conversation Manager Demo")

conversations = ["General", "Support", "Ideas"]

result = conversation_manager(
    conversations,
    accent_color="#1f77b4",
    font_family="sans-serif",
    key="conv-manager",
)

if result:
    st.json(result)
