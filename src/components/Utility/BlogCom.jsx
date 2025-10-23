import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const BlogCom = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="text-sm text-gray-500 mb-2">Product</div>

        {/* Title with Arrow */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 flex-1">
            Migrating to Linear 101
          </h3>
          <Link to="/Blog">
          <ArrowUpRight className="w-5 h-5 text-gray-900 ml-2" />
          </Link>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Phoenix Baker"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-medium text-gray-900">Phoenix Baker</div>
            <div className="text-xs text-gray-500">19 Jan 2022</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCom
