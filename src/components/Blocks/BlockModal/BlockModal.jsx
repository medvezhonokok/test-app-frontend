import React, {useEffect} from "react";
import close from "../../../assets/close.svg";
import "./BlockModal.css";

const BlockModal = ({block, onClose}) => {

    // Чтобы нельзя было прокручивать бэкграунд, когда всплывашка оторажена
    useEffect(() => {
        document.body.classList.add("no-scroll");
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="block-modal-header">
                    <span>Block {block.id}</span>
                    <div className="modal-close-button">
                        <img src={close} alt="close" onClick={onClose}/>
                    </div>
                </div>

                <div className="block-hash-container">
                    <h1>Hash</h1>
                    <div className="block-hash">{block.hash}</div>
                </div>

                <table className="info-table">
                    <tbody>
                    <tr>
                        <td>Miner</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td>Miner's reward</td>
                        <td>238.1</td>
                    </tr>
                    <tr>
                        <td>Total number of users</td>
                        <td>18932</td>
                    </tr>
                    <tr>
                        <td>Share reward</td>
                        <td>678.4</td>
                    </tr>
                    <tr>
                        <td>My reward</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>05.12.2024, 16:26:46</td>
                    </tr>
                    </tbody>
                </table>

                <button className="ok-button" onClick={onClose}>
                    OK
                </button>
            </div>
        </div>
    );
};

export default BlockModal;
