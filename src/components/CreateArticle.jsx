import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Sidebar from './Sidebar';
import { FiSave, FiArrowLeft} from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [content, setContent] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('thumbnail', thumbnail);
    formData.append('content', content);

    try {
      await axios.post('https://api.tegararsyadani.my.id/api/admin/article', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/Article');
    } catch (err) {
      console.error('Create failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} flex-1 flex flex-col`}>
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between"></div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => navigate('/Article')} className="text-blue-600 hover:underline flex items-center">
            <FiArrowLeft className="mr-2" /> Back to Articles
          </button>
          <h1 className="text-xl font-bold">Create Article</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              className="w-full p-3 border rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block mb-1 font-medium">Thumbnail</label>
            <input
              type="file"
              className="w-full p-3 border rounded"
              accept="image/*"
              onChange={(e) => setThumbnail(e.target.files[0])}
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-1 font-medium">Content</label>
            <ReactQuill
              value={content}
              onChange={setContent}
              theme="snow"
              placeholder="Write your article content here..."
              className="bg-white"
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {isSubmitting ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <FiSave className="mr-2" />
                  Submit Article
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
      </div>

  );
};

export default CreateArticle;
