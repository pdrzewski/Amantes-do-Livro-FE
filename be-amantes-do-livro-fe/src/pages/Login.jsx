import { useNavigate, Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    alert('Login realizado com sucesso! 🎉');
    navigate('/home'); // Vamos mudar isso depois quando criar a Home
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Entrar</h1>
        <p>Bem-vindo de volta! Faça login para continuar.</p>

        <LoginForm onSuccess={handleLoginSuccess} />

        <p className="auth-link">
          Não tem uma conta?{' '}
          <Link to="/cadastro">Cadastre-se aqui</Link>
        </p>
      </div>
    </div>
  );
}