# Streamlit Conversation Manager

This repository provides a reusable Streamlit component written in React that renders a list of conversation names with inline action buttons. The component emits events back to Python when a conversation is selected, renamed, or deleted. Styling can be customised via the component parameters or overridden with CSS.

## Features

- List conversations with inline rename and delete buttons
- Emits `select`, `rename`, and `delete` events to Streamlit
- Supports custom colours and fonts via props
- Integrates as a standard Streamlit component

## Usage

```python
import streamlit as st
from conversation_component import conversation_manager

convos = ["General", "Support", "Ideas"]

result = conversation_manager(convos, accent_color="#FF4B4B", font_family="Arial")

if result:
    st.write(result)
```

## Development

The frontend is a small React project located in `conversation_component/frontend`.
To develop locally:

```bash
cd conversation_component/frontend
npm install
npm start
```

Then run `streamlit run example.py` from the project root. To create a production build:

```bash
npm run build
```

The build output will be placed under `conversation_component/frontend/build` and used when `_RELEASE` is set to `True` inside `conversation_component/__init__.py`.
