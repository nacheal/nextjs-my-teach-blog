import CircuitBackground from '@/components/CircuitBackground'

export default function AboutPage() {
  return (
    <>
      <CircuitBackground />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
            关于我
          </h1>
          <div className="space-y-4 text-lg">
            <p>你好，我是麦国权，一名全栈开发者。</p>
            <p>拥有5年以上的Web开发经验，专注于构建现代化、高性能的Web应用。</p>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
            技术栈
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">前端</h3>
              <ul className="space-y-1">
                <li>• Next.js/React</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">后端</h3>
              <ul className="space-y-1">
                <li>• Node.js</li>
                <li>• Express</li>
                <li>• MongoDB</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
            博客使命
          </h2>
          <div className="space-y-4 text-lg">
            <p>创建这个博客的目的是分享我在开发过程中学到的知识和经验。</p>
            <p>希望通过这个平台能与更多开发者交流，共同进步。</p>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
            联系我
          </h2>
          <p className="text-lg">邮箱: example@example.com</p>
        </section>
      </main>
    </>
  )
}
