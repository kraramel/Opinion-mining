import React from 'react';
import { Route } from 'react-router-dom';
import ImportField from './components/input';
import ImportField1 from './components/input1';
// import Contact from './components/contact';
import Us from './components/us';
import Accueil from './components/accueil';
import ContactAxa from './components/contactaxa';
import ContactQbe from './components/contactqbe';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Accueil} />
        <Route exact path='/indicateursaxa' component={ImportField} />
        <Route exact path='/indicateursqbe' component={ImportField1} />
        <Route exact path='/contactaxa' component={ContactAxa} />
        <Route exact path='/contactqbe' component={ContactQbe} />

        <Route exact path='/us' component={Us} />

    </div>
);

export default BaseRouter;