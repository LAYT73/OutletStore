import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import MainPage from "../pages/MainPage.jsx";
import App from "../App.jsx";
import {LoginPage} from "../pages/LoginPage.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/MainPage">
                <MainPage/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/LoginPage">
                <LoginPage/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews