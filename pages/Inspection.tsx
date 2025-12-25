
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../types';

interface InspectionProps {
  role: UserRole;
}

const Inspection: React.FC<InspectionProps> = ({ role }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending');

  const tasks = [
    { id: 't1', name: '每日闭店自检', type: '自检', status: 'pending', time: '18:00', store: 'A店' },
    { id: 't2', name: '周二清洁日任务', type: '专项', status: 'pending', time: '周二', store: 'A店' },
    { id: 't3', name: '仪容仪表视频巡检', type: '视频', status: 'completed', time: '10:00', store: 'B店', score: 95 },
    { id: 't4', name: '小区经理QSC巡检', type: '常规', status: 'completed', time: '昨日', store: 'A店', score: 80 },
  ];

  return (
    <div className="flex-1 bg-gray-50 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="bg-white p-4 flex items-center shadow-sm">
        <button onClick={() => navigate('/')} className="mr-3 text-xl">←</button>
        <h1 className="text-lg font-bold flex-1 text-center pr-8">巡检中心</h1>
      </div>

      {/* Tabs */}
      <div className="flex bg-white px-4 pt-2 border-b">
        {['pending', 'completed', 'top10'].map(t => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`flex-1 pb-3 text-sm transition-all ${
              activeTab === t ? 'text-primary font-bold border-b-2 border-primary' : 'text-gray-400'
            }`}
          >
            {t === 'pending' ? '待巡检' : t === 'completed' ? '已巡检' : 'TOP问题'}
          </button>
        ))}
      </div>

      {/* Action Bar */}
      <div className="p-4">
        <button className="w-full bg-white border-2 border-dashed border-gray-300 rounded-xl py-3 flex items-center justify-center text-gray-500 text-sm active:bg-gray-100 transition-colors">
          <span className="text-xl mr-2">+</span> 创建巡检任务
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {activeTab === 'pending' && (
          <div className="space-y-4">
            {tasks.filter(t => t.status === 'pending').map(task => (
              <div key={task.id} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
                <div>
                  <div className="flex items-center mb-1">
                    <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded mr-2">{task.type}</span>
                    <h3 className="text-sm font-bold text-gray-800">{task.name}</h3>
                  </div>
                  <p className="text-xs text-gray-400">执行门店: {task.store} | 截止: {task.time}</p>
                </div>
                <button className="bg-primary text-white text-xs px-4 py-2 rounded-lg font-bold">开始</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="space-y-4">
            {tasks.filter(t => t.status === 'completed').map(task => (
              <div key={task.id} className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <span className="bg-gray-100 text-gray-600 text-[10px] px-1.5 py-0.5 rounded mr-2">{task.type}</span>
                    <h3 className="text-sm font-bold text-gray-800">{task.name}</h3>
                  </div>
                  <div className={`text-lg font-bold ${task.score && task.score > 90 ? 'text-success' : 'text-danger'}`}>
                    {task.score}分
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>门店: {task.store}</span>
                  <button className="text-primary font-bold">查看详情 &gt;</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'top10' && (
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h4 className="text-sm font-bold mb-4">本月TOP 10 不合格项</h4>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center">
                  <span className={`w-5 h-5 flex items-center justify-center rounded-full text-[10px] mr-3 font-bold ${
                    i <= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {i}
                  </span>
                  <span className="text-sm text-gray-700">冷库半成品未贴标签</span>
                </div>
                <span className="text-sm font-bold text-danger">1.21%</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inspection;
