import { useState } from 'react';
import api from '../services/api';

export default function CadastroForm({ onSuccess }) {
  const [form, setForm] = useState({
    usuario: '',
    email: '',
    nome: '',
    senha: ''
  });
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
      await api.post('/login/cadastrar', form);
      onSuccess?.();
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao realizar cadastro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="usuario" placeholder="Usuário" value={form.usuario} onChange={handleChange} required />
      <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />
      <input type="text" name="nome" placeholder="Nome completo" value={form.nome} onChange={handleChange} required />
      <input type="password" name="senha" placeholder="Senha" value={form.senha} onChange={handleChange} required />

      {error && <p className="error">{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </button>
    </form>
  );
}