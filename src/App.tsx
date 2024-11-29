import { AdminPortal } from './components/Admin/AdminPortal';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <AdminPortal />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;