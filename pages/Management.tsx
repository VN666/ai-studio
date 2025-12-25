
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Management: React.FC<{ role: string }> = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('health');

  return (
    <div className="flex-1 bg-gray-50 flex flex-col">
      <div className="bg-white p-4 flex items-center shadow-sm">
        <button onClick={() => navigate('/')} className="mr-3 text-xl">←</button>
        <h1 className="text-lg font-bold flex-1 text-center pr-8">运营管理</h1>
      </div>

      <div className="flex bg-white border-b sticky top-0">
        <button 
          onClick={() => setActiveTab('health')}
          className={`flex-1 py-4 text-sm font-bold transition-all ${activeTab === 'health' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
        >
          健康证管理
        </button>
        <button 
          onClick={() => setActiveTab('ledger')}
          className={`flex-1 py-4 text-sm font-bold transition-all ${activeTab === 'ledger' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
        >
          台账记录
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'health' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl mr-4">👤</div>
              <div className="flex-1">
                <h3 className="text-sm font-bold">张三 <span className="text-xs font-normal text-gray-400">(厨师长)</span></h3>
                <p className="text-xs text-danger mt-1">健康证到期: 2023-09-01 (临期)</p>
              </div>
              <button className="bg-primary text-white text-xs px-3 py-1.5 rounded-lg font-bold">去上传</button>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl mr-4">👤</div>
              <div className="flex-1">
                <h3 className="text-sm font-bold">李四 <span className="text-xs font-normal text-gray-400">(服务员)</span></h3>
                <p className="text-xs text-gray-400 mt-1">健康证到期: 2024-05-12</p>
              </div>
              <span className="text-success text-xs font-bold">有效期内</span>
            </div>
          </div>
        )}

        {activeTab === 'ledger' && (
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: '废油台账', count: '今日已完成', color: 'bg-amber-50' },
              { title: '滤芯更换记录', count: '待录入', color: 'bg-blue-50' },
              { title: '制冰机清洗记录', count: '上次清洗: 7日前', color: 'bg-cyan-50' }
            ].map(item => (
              <div key={item.title} className={`${item.color} p-5 rounded-2xl border border-white shadow-sm flex justify-between items-center active:scale-95 transition-transform cursor-pointer`}>
                <div>
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.count}</p>
                </div>
                <div className="bg-white/50 p-2 rounded-full">📝</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Management;
