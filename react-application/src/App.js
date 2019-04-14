import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import './App.scss';

// Comme le fichier ../index.js fait appel au seul composant App, ce sera donc ici que sera toute la logique de l'application
class App extends Component {
  /**
   * Cette fonction est présente dans tous les composant, elle permet de rendre la vue, c'est pour cela que le Composant
   * etendra toujours de la classe React.Component
   *
   * @render View
   */
  render() {
    return (
      <div className="App">
        {/* 1 - Le router est un element permettant d'afficher les pages de notre application */}
        <Router>
          <div>
            <ul>
              <li>
                {/* 2 - Chaque Lien mène à une route */}
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/pokedex">PokeDex</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            {/* 3 - Qui elle même renvoie la vue à un Composant définit en props, c'est ici que les vues sont affichées. */}
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
