import React from 'react';
import ReactDOM from 'react-dom';
import UpdateAlias from './../../components/name/update-alias';

it("checks if UpdateAlias loads successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UpdateAlias></UpdateAlias>, div);
});
