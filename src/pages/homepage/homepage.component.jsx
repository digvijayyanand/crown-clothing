import React from "react";

import Directory from "../../components/directory/directory.componet";
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <Directory />
    </div>
);
const obj = {
    home: HomePage
}
export default obj;
