
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Review: React.FC<{ role: string }> = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-gray-50 flex flex-col">
      <div className="bg-white p-4 flex items-center shadow-sm">
        <button onClick={() => navigate('/')} className="mr-3 text-xl">←</button>
        <h1 className="text-lg font-bold flex-1 text-center pr-8">自检点评</h1>
      </div>

      <div className="p-4 bg-white mb-2 flex justify-between items-center">
        <span className="text-sm text-gray-500">共 3 份报告待点评</span>
        <button className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">批量点评</button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {[
          { store: '王府井一店', type: '晚市自检报告', time: '今日 21:30', author: '店长', status: '待点评' },
          { store: '朝阳大悦城店', type: '早市自检报告', time: '今日 10:00', author: '值班经理', status: '待点评' },
          { store: '三里屯店', type: '周自检总结', time: '昨日 15:20', author: '店长', status: '已点评', score: '优秀' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-gray-800">{item.store}</h3>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.status === '待点评' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'}`}>
                {item.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4">{item.type} | {item.author} | {item.time}</p>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-600">查看报告</button>
              {item.status === '待点评' && (
                <button className="flex-1 py-2 bg-primary rounded-lg text-xs font-bold text-white">去点评</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
