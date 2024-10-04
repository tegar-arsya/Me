import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

const EditAbout = () => {
  const { id } = useParams();
  const [about, setAbout] = useState({
    description: '',
    imageUrl: ''
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Component mounted. Fetching about with id:', id);
    fetchAbout();
  }, [id]);

  const fetchAbout = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching About data...');
      const response = await axios.get(`https://apiportofolio.tegararsyadani.my.id/api/about/postsAbout/${id}`);
      console.log('Received response:', response);
      if (response.data) {
        console.log('Setting about data:', response.data);
        setAbout(response.data);
      } else {
        console.error('No data received from server');
        setError('No data received from server');
      }
    } catch (error) {
      console.error('Error fetching about:', error);
      setError(error.response?.data?.message || error.message || 'An error occurred while fetching the about');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbout(prevState => ({
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
    formData.append('description', about.description);
    if (image) {
      formData.append('image', image);
    }

    try {
      console.log('Updating about...');
      const response = await axios.put(`https://apiportofolio.tegararsyadani.my.id/api/about/postsAbout/${id}`, formData);
      console.log('Update response:', response);
      navigate('/about');
    } catch (error) {
      console.error('Error updating about:', error);
      setError(error.response?.data?.message || error.message || 'An error occurred while updating the about');
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
            Back to About List
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
    
        <h2 className="text-2xl font-bold mb-4">Edit About</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={about.description}
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
            {about.imageUrl && (
              <img src={`https://apiportofolio.tegararsyadani.my.id${about.imageUrl}`} alt="Current" className="mt-2 h-20 w-20 object-cover" />
            )}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Update
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default EditAbout;