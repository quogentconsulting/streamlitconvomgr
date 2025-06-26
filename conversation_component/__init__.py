import os
import streamlit.components.v1 as components

_RELEASE = False

if _RELEASE:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, 'frontend', 'build')
    _component_func = components.declare_component('conversation_manager', path=build_dir)
else:
    _component_func = components.declare_component('conversation_manager', url="http://localhost:3001")

def conversation_manager(conversations, key=None, **style):
    """Renders the conversation manager.

    Parameters
    ----------
    conversations: list[str]
        List of conversation names.
    style: dict
        Styling options passed to the frontend.
    key: str or None
        Streamlit key.

    Returns
    -------
    dict or None
        Event information from the frontend or None if no event.
    """
    return _component_func(conversations=conversations, style=style, key=key)
