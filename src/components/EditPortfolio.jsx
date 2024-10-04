import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

const EditPortfolio = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState({
    title: '',
    description: '',
    imageUrl: '',
    site: '',
    github: ''
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Component mounted. Fetching portfolio with id:', id);
    fetchPortfolio();
  }, [id]);

  const fetchPortfolio = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching portfolio data...');
      const response = await axios.get(`https://apiportofolio.tegararsyadani.my.id/api/porto/postsPorto/${id}`);
      console.log('Received response:', response);
      if (response.data) {
        console.log('Setting portfolio data:', response.data);
        setPortfolio(response.data);
      } else {
        console.error('No data received from server');
        setError('No data received from server');
      }
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      setError(error.response?.data?.message || error.message || 'An error occurred while fetching the portfolio');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolio(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append('title', portfolio.title);
    formData.append('description', portfolio.description);
    if (image) {
      formData.append('image', image);
    }
    formData.append('site', portfolio.site);
    formData.append('github', portfolio.github);

    try {
      console.log('Updating portfolio...');
      const response = await axios.put(`https://apiportofolio.tegararsyadani.my.id/api/porto/postsPorto/${id}`, formData);
      console.log('Update response:', response);
      navigate('/portfolio');
    } catch (error) {
      console.error('Error updating portfolio:', error);
      setError(error.response?.data?.message || error.message || 'An error occurred while updating the portfolio');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex h-screen bg-gray-100">
       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex-1 p-4 transition-all duration-300 bg-white shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Error</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/portfolio')} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Back to Portfolio List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
     <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
     <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } flex-1 p-4 bg-white shadow-md`}
      >
        <h2 className="text-2xl font-bold mb-4">Edit Portfolio</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={portfolio.title}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={portfolio.description}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="border p-2 w-full"
            />
            {portfolio.imageUrl && (
              <img src={`https://apiportofolio.tegararsyadani.my.id${portfolio.imageUrl}`} alt="Current" className="mt-2 h-20 w-20 object-cover" />
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Website URL</label>
            <input
              type="text"
              name="site"
              value={portfolio.site}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">GitHub URL</label>
            <input
              type="text"
              name="github"
              value={portfolio.github}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPortfolio;
