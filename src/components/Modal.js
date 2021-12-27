import { useEffect } from "react";
import reactDom from "react-dom";

export default function Modal(props) {
    useEffect(() => {
        document.addEventListener("keydown", closeOnEscape)
        return () => {
            document.removeEventListener("keydown", closeOnEscape)
        }
    })

    function closeOnEscape(e) {
        if (e.charCode || e.keyCode === 27) {
            props.closeModal()
        } 
    }

    // Render
    if (!props.isShow) {
        return null
    }

    return reactDom.createPortal(
        <div onClick={props.closeModal}>
            <div onClick={e => e.stopPropagation()}>
                <div>
                    <h4>{props.title}</h4>
                </div>
                <div>
                    {props.children}
                </div>
                <div>
                    <button onClick={props.closeModal}>Close</button>
                </div>
            </div>
        </div>
    , document.getElementById('root'))
}