'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 전송되었습니다! (실제로는 전송되지 않습니다)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            문의하기
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 text-center mb-8">
              궁금한 것이 있으시면 언제든지 문의해 주세요!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="이름을 입력해주세요"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="이메일을 입력해주세요"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  placeholder="문의 내용을 입력해주세요"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                문의 전송
              </button>
            </form>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-semibold text-gray-800 mb-2">이메일</h3>
              <p className="text-gray-600">contact@example.com</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-2xl mb-2">💬</div>
              <h3 className="font-semibold text-gray-800 mb-2">채팅</h3>
              <p className="text-gray-600">24시간 응답</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
