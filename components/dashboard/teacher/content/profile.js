import React from 'react'

function profile() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 w-64 h-80 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="h-40 bg-white">
        
      </div>
      <div className="h-40 flex flex-col justify-center items-center text-white">
        <h3 className="text-2xl font-bold mb-2">Profile</h3>
        <p className="text-lg">Content</p>
      </div>
    </div>
  )
}

export default profile