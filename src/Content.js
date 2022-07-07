import './Content.css';
import { useContext } from 'react';
import AppContext from './AppContext';
import Login from './Login';

function Content() {
  const context = useContext(AppContext);

  return (
    <div className="Content">
      <h1>Sitemize Hoşgeldiniz</h1>
      <p>{context.userName} adıyla oturum açtınız.</p>
      <Login />
    </div>
  );
}

export default Content;