import React from 'react';
import ReactDOM from 'react-dom';
import { FaItalic } from 'react-icons/fa';
import ListAlias from '../../../../src/components/name/list-Alias';

it("checks if ListAlias loads successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListAlias></ListAlias>, div);
})