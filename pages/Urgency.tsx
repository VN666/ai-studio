
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Urgency: React.FC<{ role: string }> = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-gray-50 flex flex-col">
      <div className="bg-white p-4 flex items-center shadow-sm">
        <button onClick={() => navigate('/')} className="mr-3 text-xl">←</button>
        <h1 className="text-lg font-bold flex-1 text-center pr-8">任务催办</h1>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">今日未完成任务统计</h2>
        
        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-2xl font-black text-gray-800">12</p>
              <p className="text-xs text-gray-400">待执行门店</p>
            </div>
            <button className="bg-primary text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg shadow-primary/20">一键全员催办</button>
          </div>

          <div className="space-y-4">
            {[
              { name: '西单大悦城店', task: '闭店自检', user: '张店长', status: '超时' },
              { name: '国贸三期店', task: '物料清点', user: '李经理', status: '待执行' },
              { name: '五棵松店', task: '废油处理', user: '王组长', status: '待执行' }
            ].map(item => (
              <div key={item.name} className="flex items-center justify-between py-3 border-t border-gray-50">
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-700">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.task} • {item.user}</p>
                </div>
                <div className="flex items-center">
                  <span className={`text-[10px] mr-3 font-bold ${item.status === '超时' ? 'text-danger' : 'text-warning'}`}>{item.status}</span>
                  <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg">🤖</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-200">
          <h3 className="font-bold mb-2">机器人自动通知</h3>
          <p className="text-xs opacity-80 leading-relaxed">系统将在任务截止前30分钟，通过企微机器人自动触达相关负责人，无需手动操作。</p>
        </div>
      </div>
    </div>
  );
};

export default Urgency;
