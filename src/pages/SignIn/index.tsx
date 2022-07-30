import { GoogleLogo } from 'phosphor-react';

import './style.scss';

export default function SignIn() {
  return (
    <div className="container">
      <h1>Acesse sua conta</h1>
      <span>
        Utilizando autenticação social, por exemplo, autenticação com o Google você <br />
        facilita a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro.
      </span>
      <button type="button" className="button">
        <GoogleLogo />
        Entrar com o Google
      </button>
    </div>
  );
}
