import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm bg-purple-900/20 border-b border-purple-400/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex space-x-8">
          <Link 
            href="/" 
            className="text-purple-300 hover:text-pink-400 transition-colors font-medium"
          >
            首页
          </Link>
          <Link 
            href="/categories" 
            className="text-purple-300 hover:text-pink-400 transition-colors font-medium"
          >
            分类
          </Link>
          <Link 
            href="/about" 
            className="text-purple-300 hover:text-pink-400 transition-colors font-medium"
          >
            关于
          </Link>
        </div>
      </div>
    </nav>
  );
}
