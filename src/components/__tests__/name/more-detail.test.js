import React from 'react';
import ReactDOM from 'react-dom';
import { FaItalic } from 'react-icons/fa';
import AddMoreDetail from '../../../../src/components/name/more-detail';

it("checks if AddMoreDetail loads successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddMoreDetail></AddMoreDetail>, div);
})