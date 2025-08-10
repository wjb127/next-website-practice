export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            안녕하세요! 👋
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Next.js 15로 만든 간단한 웹사이트입니다. 
            이 사이트는 연습용으로 제작되었습니다.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">빠른 성능</h3>
              <p className="text-gray-600">Next.js 15의 최신 기능을 활용한 빠른 웹사이트</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">모던 디자인</h3>
              <p className="text-gray-600">Tailwind CSS로 구현한 깔끔한 인터페이스</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">반응형</h3>
              <p className="text-gray-600">모든 디바이스에서 완벽하게 작동하는 반응형 디자인</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}