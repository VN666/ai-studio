
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../types';

interface DashboardProps {
  role: UserRole;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  const navigate = useNavigate();

  const data = [
    { label: '自检完成率', value: '97%', color: 'text-primary', bg: 'bg-orange-50' },
    { label: '视频合格率', value: '91%', color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: '督查合格率', value: '88%', color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'TOP问题率', value: '1.01%', color: 'text-red-500', bg: 'bg-red-50' },
  ];

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto pb-10">
      <div className="bg-white p-4 sticky top-0 z-10 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate('/')} className="text-xl">←</button>
        <h1 className="text-lg font-bold">数据看板</h1>
        <button className="text-sm text-primary">筛选</button>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {data.map(item => (
            <div key={item.label} className={`${item.bg} p-4 rounded-2xl`}>
              <p className="text-xs text-gray-500 mb-1">{item.label}</p>
              <p className={`text-2xl font-black ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Chart Mockup */}
        <div className="mt-6 bg-white p-4 rounded-2xl shadow-sm border">
          <h3 className="text-sm font-bold mb-4">合格率趋势</h3>
          <div className="h-40 flex items-end justify-between gap-2 px-2">
            {[40, 60, 45, 90, 85, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  style={{ height: `${h}%` }} 
                  className={`w-full max-w-[12px] rounded-t-full ${i === 5 ? 'bg-primary' : 'bg-primary/30'}`}
                ></div>
                <span className="text-[10px] text-gray-400 mt-2">{i + 3}月</span>
              </div>
            ))}
          </div>
        </div>

        {/* Store Ranking */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold">辖区门店排名</h3>
            <span className="text-xs text-gray-400">问题率从高到低</span>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border">
            {[
              { name: '北京朝阳路店', rate: '2.5%' },
              { name: '北京三里屯店', rate: '2.1%' },
              { name: '北京王府井店', rate: '1.8%' },
              { name: '上海南京东路店', rate: '0.9%' },
            ].map((store, i) => (
              <div key={i} className="flex items-center p-4 border-b last:border-0 hover:bg-gray-50 cursor-pointer">
                <span className="text-xs font-bold text-gray-400 mr-4 w-4">{i + 1}</span>
                <span className="text-sm text-gray-700 flex-1">{store.name}</span>
                <span className={`text-sm font-bold ${i < 2 ? 'text-danger' : 'text-success'}`}>{store.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
