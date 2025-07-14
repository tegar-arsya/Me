
import React from "react"
import { motion } from "framer-motion"
import { Users, FolderOpen, Award, TrendingUp, Calendar, Bell, Search } from "lucide-react"
import Sidebar from "./sidebar"

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const stats = [
    {
      icon: Users,
      title: "Total Visitors",
      value: "12,345",
      change: "+12%",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FolderOpen,
      title: "Portfolio Items",
      value: "24",
      change: "+3",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "Certificates",
      value: "8",
      change: "+2",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Growth Rate",
      value: "23%",
      change: "+5%",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const recentActivities = [
    { action: "New portfolio item added", time: "2 hours ago", type: "portfolio" },
    { action: "Certificate uploaded", time: "4 hours ago", type: "certificate" },
    { action: "Profile updated", time: "1 day ago", type: "profile" },
    { action: "New experience added", time: "2 days ago", type: "experience" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className={`transition-all duration-300 ${isSidebarOpen ? "lg:ml-72" : "ml-0"}`}>
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Heres whats happening.</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <Bell className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{activity.action}</p>
                      <p className="text-gray-500 text-sm">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>

              <div className="space-y-3">
                {[
                  { label: "Add Portfolio", path: "/portfolio/create", color: "from-blue-500 to-blue-600" },
                  { label: "Upload Certificate", path: "/sertifikat/create", color: "from-green-500 to-green-600" },
                  { label: "Update Profile", path: "/about/create", color: "from-purple-500 to-purple-600" },
                  { label: "Add Experience", path: "/pengalaman/create", color: "from-orange-500 to-orange-600" },
                ].map((action, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => (window.location.href = action.path)}
                    className={`w-full p-3 bg-gradient-to-r ${action.color} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {action.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white/60 backdrop-blur-sm border-t border-white/20 p-6 text-center">
          <p className="text-gray-600">© 2024 Your Company. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default Dashboard
