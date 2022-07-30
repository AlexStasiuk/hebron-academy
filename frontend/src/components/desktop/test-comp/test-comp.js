import React, { useState } from 'react';
import './test-comp.css';

const TempComp = () => {
    const [valuableFqa, setFqa] = useState(0);
    return (
        <div>
            {fetch('http://localhost:8000/newsletter/')
                .then((response) => response.text())
                .then((data) => console.log(data))}
            {valuableFqa}
        </div>
    );
};

export default TempComp;
