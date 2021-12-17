import { useState } from "react/cjs/react.development"
import Modal from "./Modal"

export default function Dropdown(props) {
    const [isShowModal, setIsShowModal] = useState(false)
    if (!props.isShown) {
        return null
    }
    return (
        <div onClick={props.onClose}>
            <div onClick={e => e.stopPropagation()}>
                {props.list.map((item, i) => (
                    <li key={i}>
                        { props.isButton
                        ? <button onClick={() => setIsShowModal(true)}>{item.text}</button> 
                        : <a href={item.link}>{item.text}</a>
                        }
                    </li>
                ))}
            </div>
            <Modal isShow={isShowModal} closeModal={() => setIsShowModal(false)}>
                {props.children}
            </Modal>
        </div>
    )
}