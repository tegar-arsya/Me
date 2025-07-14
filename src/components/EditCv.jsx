import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

const EditCv = () => {
  const { id } = useParams();
  const [Cv, setCv] = useState({
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Component mounted. Fetching Cv with id:', id);
    fetchCv();
  }, [id]);

  const fetchCv = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching About data...');
      const response = await axios.get(`https://apiportofolio.tegararsyadani.my.id/api/admin/cv/${id}`);
      console.log('Received response:', response);
      if (response.data) {
        console.log('Setting about data:', response.data);
        setCv(response.data);
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



  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }

    try {
      console.log('Updating about...');
      const response = await axios.put(`https://apiportofolio.tegararsyadani.my.id/api/admin/cv/${id}`, formData);
      console.log('Update response:', response);
      navigate('/cv');
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
          <button onClick={() => navigate('/cv')} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Back to cv List
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

        <h2 className="text-2xl font-bold mb-4">Edit cv</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">file</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="border p-2 w-full"
            />
            {Cv.file && (
              <img src={`https://apiportofolio.tegararsyadani.my.id${Cv.file}`} alt="Current" className="mt-2 h-20 w-20 object-cover" />
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

export default EditCv;
