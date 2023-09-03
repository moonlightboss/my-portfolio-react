import {BrowserRouter} from "react-router-dom";
import {
    About,
    Contact,
    Experience,
    // Feedbacks,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
} from "./components";

import {Suspense} from "react";
import { useTranslation } from 'react-i18next';

const App = () => {

    const {t, i18n} = useTranslation();

    return <>
        <Suspense>
            <BrowserRouter>
                <div className="relative z-0 bg-primary">
                    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                        <Navbar/>
                        <Hero/>
                    </div>
                    <About/>
                    <Experience/>
                    <Tech/>
                    <Works/>
                    {/*<Feedbacks/>*/}
                    <div className="relative z-0">
                        <Contact/>
                        <StarsCanvas/>
                    </div>
                </div>
            </BrowserRouter>
        </Suspense>
    </>;
};

export default App;
