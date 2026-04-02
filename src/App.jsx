import { useState } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import DashboardLayout from './components/DashboardLayout.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import InvestorContact from './pages/InvestorContact.jsx';
import Login from './pages/Login.jsx';

// Dashboards
import CEODashboard from './dashboards/CEODashboard.jsx';
import AdminDashboard from './dashboards/AdminDashboard.jsx';
import AuditorDashboard from './dashboards/AuditorDashboard.jsx';
import StaffDashboard from './dashboards/StaffDashboard.jsx';

const PUBLIC_PAGES = ['home', 'about', 'products', 'investor', 'login'];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState(null);
  const [dashActivePage, setDashActivePage] = useState('overview');

  const navigate = (page) => {
    if (page === 'dashboard' && !currentUser) {
      setCurrentPage('login');
    } else {
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setDashActivePage('overview');
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('home');
    setDashActivePage('overview');
  };

  // If on dashboard but not authenticated, redirect to login
  if (currentPage === 'dashboard' && !currentUser) {
    return <Login onLogin={handleLogin} navigate={navigate} />;
  }

  // Dashboard view
  if (currentPage === 'dashboard' && currentUser) {
    const DashboardComponent = {
      CEO: CEODashboard,
      Admin: AdminDashboard,
      Auditor: AuditorDashboard,
      Staff: StaffDashboard,
    }[currentUser.role] || StaffDashboard;

    return (
      <DashboardLayout
        currentUser={currentUser}
        onLogout={handleLogout}
        activePage={dashActivePage}
        setActivePage={setDashActivePage}
      >
        <DashboardComponent
          currentUser={currentUser}
          activePage={dashActivePage}
        />
      </DashboardLayout>
    );
  }

  // Login page (full screen, no navbar/footer)
  if (currentPage === 'login') {
    return <Login onLogin={handleLogin} navigate={navigate} />;
  }

  // Public pages with Navbar + Footer
  const renderPage = () => {
    switch (currentPage) {
      case 'home':     return <Home navigate={navigate} />;
      case 'about':    return <About navigate={navigate} />;
      case 'products': return <Products navigate={navigate} />;
      case 'investor': return <InvestorContact navigate={navigate} />;
      default:         return <Home navigate={navigate} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
