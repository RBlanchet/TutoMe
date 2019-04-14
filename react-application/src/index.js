import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// C'est ici que tout démarre, il indique à React de monter notre composant 'maitre' dans l'id root de notre ../public/index.html
ReactDOM.render(<App />, document.getElementById('root'));

// Le service worker donne la possibilité aux navigateurs de lancer les sites en offline.
// C'est particulièrement utilisé pour les progressive WebApp, si vous voulez avoir cette option, mettez register()
serviceWorker.unregister();
