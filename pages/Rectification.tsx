
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole, RectificationStatus, RectificationOrder } from '../types';

interface RectificationProps {
  role: UserRole;
}

const Rectification: React.FC<RectificationProps> = ({ role }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<RectificationStatus>(
    role === UserRole.AREA_MANAGER ? RectificationStatus.AUDITING : RectificationStatus.PENDING
  );

  const mockOrders: RectificationOrder[] = [
    { id: '1', title: '厨房卫生整改', source: '海康', date: '2023-08-25', status: RectificationStatus.PENDING, progress: '20/30' },
    { id: '2', title: '服务标准QSC', source: '慧运营', date: '2023-08-26', status: RectificationStatus.AUDITING, progress: '15/15' },
    { id: '3', title: '冷库温度记录异常', source: '海康', date: '2023-08-24', status: RectificationStatus.COMPLETED, progress: '10/10' },
    { id: '4', title: '门店着装专项', source: '慧运营', date: '2023-08-22', status: RectificationStatus.PENDING, progress: '0/5' },
  ];

  const filteredOrders = mockOrders.filter(o => 
    activeTab === RectificationStatus.ALL || o.status === activeTab
  ).sort((a, b) => (a.status === RectificationStatus.PENDING ? -1 : 1));

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white p-4 sticky top-0 z-10 flex items-center shadow-sm">
        <button onClick={() => navigate('/')} className="mr-3 text-xl">←</button>
        <h1 className="text-lg font-bold flex-1 text-center pr-8">整改单中心</h1>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b overflow-x-auto hide-scrollbar">
        {[RectificationStatus.PENDING, RectificationStatus.AUDITING, RectificationStatus.COMPLETED, RectificationStatus.ALL].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm transition-colors relative whitespace-nowrap px-4 ${
              activeTab === tab ? 'text-primary font-bold' : 'text-gray-500'
            }`}
          >
            {tab}
            {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="p-4 space-y-4">
        {filteredOrders.length > 0 ? filteredOrders.map(order => (
          <div key={order.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                order.source === '海康' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {order.source}
              </span>
              <span className="text-xs text-gray-400">{order.date}</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">{order.title}</h3>
            <div className="flex justify-between items-center mt-3">
              <div className="text-xs text-gray-500">
                完成进度: <span className="font-bold text-gray-700">{order.progress}</span>
              </div>
              <button className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                order.status === RectificationStatus.PENDING ? 'bg-primary text-white' : 
                order.status === RectificationStatus.AUDITING ? 'bg-warning text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {order.status === RectificationStatus.PENDING ? '去整改' : 
                 order.status === RectificationStatus.AUDITING ? (role === UserRole.AREA_MANAGER ? '去审核' : '待审核') : '已完成'}
              </button>
            </div>
          </div>
        )) : (
          <div className="text-center py-20 text-gray-400 text-sm">暂无数据</div>
        )}
      </div>
    </div>
  );
};

export default Rectification;
