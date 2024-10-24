import React, { useState } from "react";
import "./display.css";

export default function Display({ exerciseList }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleExpandClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    if (!exerciseList) return <div>No exercises found</div>;
    return (
        <div className="table-container">                                                
        <table className="display-table">
            <thead style={{ display: expandedIndex === -1 ? 'table-header-group' : 'none' }}>
                <tr>
                    <th id="expand-btn">#</th>
                    <th id="name">Name</th>
                    <th id="equipment">Equipment</th>
                    <th id="target">Target</th>
                    <th id="bodyPart">Body Part</th>
                </tr>
            </thead>
            <tbody>
                {exerciseList.map((exercise, index) => (
                    <React.Fragment key={index}>
                        <tr id="row-button">
                            <td>
                                <button
                                    type="button"
                                    className="expand-btn"
                                    onClick={() => handleExpandClick(index)}
                                >
                                    {expandedIndex === index ? '▲' : '▼'}
                                </button>
                    
                            </td>
                            <td>{exercise.name}</td>
                            <td>{exercise.equipment}</td>
                            <td>{exercise.target}</td>
                            <td>{exercise.bodyPart}</td>
                        </tr>
                        <tr className="expandable" style={{ display: expandedIndex === index ? 'table-row' : 'none' }}>
                            <td colSpan={5}>
                                <img src={exercise.gifUrl} alt={exercise.name} />
                                <ol className="instructions">{exercise.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}</ol>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
        </div>
    
    );
}
