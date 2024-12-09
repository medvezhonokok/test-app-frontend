import React, {useState} from 'react';
import "./Blocks.css";
import BlockModal from "./BlockModal/BlockModal";

const Blocks = () => {

    const [selectedBlock, setSelectedBlock] = useState(null);
    const blocks = [
        {hash: "312310ssssa3ds2ad103953443k4asda", id: '#12344', creationTime: "00:25 by Kate", reward: "0"},
        {hash: "312310ssssa3ds2ad103953443k4asda", id: '#12345', creationTime: "00:30 by John", reward: "1"},
        {hash: "312310ssssa3ds2ad103953443k4asda", id: '#12346', creationTime: "00:35 by Alice", reward: "2"},
        {hash: "312310ssssa3ds2ad103953443k4asda", id: '#12347', creationTime: "00:40 by Bob", reward: "3"}
    ];

    return (
        <div className="blocks-container">
            <h1 className="container-header">Last blocks</h1>
            <div className="blocks-grid">
                {blocks.map((block, index) => (
                    <div
                        key={index}
                        className="block-container"
                        onClick={() => setSelectedBlock(block)}
                    >
                        <div className="block-info">
                            <span className="info-value">{block.id}</span>
                            <span className="info-label">{block.creationTime}</span>
                        </div>
                        <button className="block-reward">
                            My reward: {block.reward}
                        </button>
                    </div>
                ))}
            </div>

            {selectedBlock && (
                <BlockModal block={selectedBlock} onClose={() => setSelectedBlock(null)}/>
            )}
        </div>
    );
};

export default Blocks;
