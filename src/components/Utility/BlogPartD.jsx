import React from 'react'
// import React from 'react';
import { Heart, Share2, Bookmark, MessageCircle, Calendar, Clock, User } from 'lucide-react';


const BlogPartD = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">TechBlog</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
            Technology
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          The Future of Web Development: Trends to Watch in 2025
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span className="font-medium">Sarah Johnson</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>October 20, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>8 min read</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            <Heart size={20} />
            <span className="font-medium">234</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            <MessageCircle size={20} />
            <span className="font-medium">42</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            <Bookmark size={20} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            <Share2 size={20} />
          </button>
        </div>

        {/* Featured Image */}
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop"
          alt="Blog post featured"
          className="w-full h-96 object-cover rounded-xl mb-8"
        />

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The web development landscape is constantly evolving, and 2025 promises to bring
            exciting new trends and technologies that will shape how we build digital experiences.
            From AI-powered development tools to revolutionary frameworks, here's what you need to know.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            1. AI-Assisted Development
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Artificial intelligence is no longer just a buzzword in web development. AI-powered
            coding assistants have become indispensable tools, helping developers write cleaner
            code faster. These tools can suggest optimizations, catch bugs before they happen,
            and even generate entire components based on natural language descriptions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            2. The Rise of Edge Computing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Edge computing is revolutionizing how we think about web performance. By processing
            data closer to users, applications can achieve near-instantaneous load times and
            provide seamless experiences regardless of geographic location. This shift is
            particularly crucial for global applications and real-time features.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            3. Enhanced Developer Experience
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Modern frameworks are prioritizing developer experience more than ever. Hot module
            replacement, intuitive APIs, and comprehensive documentation are becoming standard.
            The focus has shifted from just performance to creating tools that developers
            actually enjoy using.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            4. WebAssembly Goes Mainstream
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            WebAssembly is finally reaching its potential, enabling developers to run
            high-performance applications in the browser that were previously impossible.
            From video editing to 3D modeling, the web is becoming a platform for
            traditionally desktop-only applications.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Looking Ahead
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The future of web development is bright and full of possibilities. As these trends
            continue to evolve, staying informed and adaptable will be key to success. Whether
            you're a seasoned developer or just starting out, now is an exciting time to be
            building for the web.
          </p>
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
              Web Development
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
              React
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
              AI
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
              Future Tech
            </span>
          </div>
        </div>

        {/* Author Card */}
        <div className="mt-12 p-6 bg-white rounded-xl border">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16  from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              SJ
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-4">
                Tech enthusiast and full-stack developer with a passion for creating elegant
                solutions to complex problems. Writing about web development, design, and
                everything in between.
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium">
                Follow
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BlogPartD
