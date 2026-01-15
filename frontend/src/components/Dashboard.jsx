import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>¡Bienvenido, {user?.name}!</p>
      <p>Has iniciado sesión exitosamente.</p>
      
      <div className="dashboard-info">
        <h3>Información del Usuario</h3>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Nombre:</strong> {user?.name}</p>
        <p><strong>Rol:</strong> {user?.role}</p>
        <p><strong>ID:</strong> {user?.id}</p>
      </div>
    </div>
  );
};

export default Dashboard;

