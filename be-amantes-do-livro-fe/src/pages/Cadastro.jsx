import { useNavigate, Link } from 'react-router-dom';
import CadastroForm from '../components/CadastroForm';

export default function Cadastro() {
  const navigate = useNavigate();

  const handleCadastroSuccess = () => {
    alert('Cadastro realizado com sucesso! ✅');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Criar Conta</h1>
        <p>Preencha os dados para se cadastrar no sistema.</p>

        <CadastroForm onSuccess={handleCadastroSuccess} />

        <p className="auth-link">
          Já tem uma conta?{' '}
          <Link to="/login">Faça login aqui</Link>
        </p>
      </div>
    </div>
  );
}