export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            소개
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              이 프로젝트에 대해
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              이 웹사이트는 Next.js 15를 학습하고 연습하기 위해 만들어졌습니다. 
              최신 웹 개발 기술들을 활용하여 모던하고 사용자 친화적인 인터페이스를 구현했습니다.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">사용된 기술</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-700">Next.js 15</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">TypeScript</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-gray-700">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-700">App Router</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              목표
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Next.js 15의 새로운 기능들을 실습하고 학습</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>모던 웹 개발 워크플로우 익히기</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>반응형 디자인과 사용자 경험 개선</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>TypeScript와 Tailwind CSS 활용법 숙달</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
