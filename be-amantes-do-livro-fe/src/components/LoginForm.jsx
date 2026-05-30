import { useState } from 'react';
import api from '../services/api';

export default function LoginForm({ onSuccess }) {
  const [form, setForm] = useState({ usuario: '', senha: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await api.post('/login/entrar', form);
      onSuccess?.(); // chama função quando der certo (ex: redirecionar)
    } catch (err) {
      setError(err.response?.data?.message || 'Usuário ou senha incorretos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="usuario"
        placeholder="Usuário"
        value={form.usuario}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={form.senha}
        onChange={handleChange}
        required
      />

      {error && <p className="error">{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}