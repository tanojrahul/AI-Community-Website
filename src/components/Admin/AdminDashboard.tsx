import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { StatsCard } from './StatsCard';

export const AdminDashboard = () => {
  const visitorData = [
    { date: 'Mon', visitors: 2400 },
    { date: 'Tue', visitors: 1398 },
    { date: 'Wed', visitors: 3800 },
    { date: 'Thu', visitors: 3908 },
    { date: 'Fri', visitors: 4800 },
    { date: 'Sat', visitors: 3800 },
    { date: 'Sun', visitors: 4300 },
  ];

  const weeklyStats = [
    { week: 'W1', users: 340, posts: 234, comments: 890 },
    { week: 'W2', users: 389, posts: 278, comments: 920 },
    { week: 'W3', users: 420, posts: 298, comments: 1020 },
    { week: 'W4', users: 460, posts: 320, comments: 1120 },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Views"
          value="128.5K"
          change="+12.5%"
          isPositive={true}
        />
        <StatsCard
          title="Total Users"
          value="2,845"
          change="+8.2%"
          isPositive={true}
        />
        <StatsCard
          title="Total Posts"
          value="1,249"
          change="+15.8%"
          isPositive={true}
        />
        <StatsCard
          title="Total Comments"
          value="8,924"
          change="-2.4%"
          isPositive={false}
        />
      </div>

      {/* Visitor Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Visitors */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Daily Visitors</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={visitorData}>
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorVisitors)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Weekly Activity</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="week" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="users" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="posts" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="comments" fill="#6366F1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};