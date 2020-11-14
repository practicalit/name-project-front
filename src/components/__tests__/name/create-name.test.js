import React from 'react';
import ReactDOM from 'react-dom';
import { FaItalic } from 'react-icons/fa';
import CreateName from '../../../../src/components/name/create-name';

it("checks if CreateName loads successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CreateName></CreateName>, div);
})