
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../types';

interface HomeProps {
  role: UserRole;
}

const Home: React.FC<HomeProps> = ({ role }) => {
  const navigate = useNavigate();
  const [showNotice, setShowNotice] = useState(true);

  const modules = [
    { id: 'rectification', name: '整改单', icon: '📝', path: '/rectification', badge: 5 },
    { id: 'inspection', name: '门店自检', icon: '🔍', path: '/inspection', badge: 2 },
    { id: 'review', name: '自检点评', icon: '💬', path: '/review', badge: 3 },
    { id: 'dashboard', name: '数据看板', icon: '📊', path: '/dashboard' },
    { id: 'management', name: '证照管理', icon: '🪪', path: '/management' },
    { id: 'urgency', name: '任务催办', icon: '🔔', path: '/urgency' },
    { id: 'ledger', name: '台账管理', icon: '📓', path: '/management' },
    { id: 'monitor', name: '监控巡检', icon: '📹', path: '/inspection' },
  ];

  // Logic: Hide modules based on role (Mocked)
  const filteredModules = modules.filter(m => {
    if (role === UserRole.EMPLOYEE) {
      return ['rectification', 'inspection', 'ledger'].includes(m.id);
    }
    return true;
  });

  return (
    <div className="flex-1 overflow-y-auto pb-10">
      {/* Header */}
      <div className="bg-primary p-6 rounded-b-[2rem] text-white">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-bold">督查系统 2.0</h1>
            <p className="text-sm opacity-80">当前身份: {role}</p>
          </div>
          <div className="bg-white/20 p-2 rounded-full">
            <span className="text-xl">👤</span>
          </div>
        </div>
      </div>

      {/* Banner Notice */}
      {showNotice && (
        <div className="m-4 p-3 bg-orange-50 border-l-4 border-primary rounded flex justify-between items-center">
          <div className="flex items-center">
            <span className="mr-2">📢</span>
            <p className="text-sm text-gray-700">今日需执行大扫除任务，请认真执行</p>
          </div>
          <button onClick={() => setShowNotice(false)} className="text-gray-400">✕</button>
        </div>
      )}

      {/* Shortcuts */}
      <div className="px-4 py-2">
        <h2 className="text-sm font-bold text-gray-800 mb-3">快捷导航</h2>
        <div className="grid grid-cols-4 gap-4">
          {filteredModules.map(module => (
            <div 
              key={module.id} 
              onClick={() => navigate(module.path)}
              className="flex flex-col items-center relative cursor-pointer active:opacity-70"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mb-1 shadow-sm">
                {module.icon}
              </div>
              <span className="text-xs text-gray-600">{module.name}</span>
              {module.badge && (
                <div className="absolute -top-1 -right-1 bg-danger text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {module.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Wait to Handle Section */}
      <div className="mt-6 px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-bold text-gray-800">今日待办</h2>
          <span className="text-xs text-gray-400">查看更多 &gt;</span>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">8月尾部餐厅专项巡检</p>
              <p className="text-xs text-gray-400 mt-1">来源: 慧运营 • 剩余 2 天</p>
            </div>
            <button className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-bold">去执行</button>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">张继8月QSC检查</p>
              <p className="text-xs text-gray-400 mt-1">来源: 海康 • 待整改</p>
            </div>
            <button className="bg-danger text-white text-xs px-3 py-1 rounded-full font-bold">去整改</button>
          </div>
        </div>
      </div>

      {/* Recommendation Data Section */}
      <div className="mt-6 px-4">
        <h2 className="text-sm font-bold text-gray-800 mb-3">关键指标</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-orange-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500">自检完成率</p>
            <p className="text-lg font-bold text-primary">97%</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500">视频合格率</p>
            <p className="text-lg font-bold text-blue-600">92%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
