import React from 'react'

const Home = () => {
  return (
     <div className="min-h-screen bg-background text-textPrimary flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-primary">Herbals 🌿</h1>
      <p className="text-secondary mt-2">Welcome to your herbal store</p>
      <button className="mt-6 px-4 py-2 bg-accent text-primary rounded-lg hover:bg-secondary">
        Shop Now
      </button>
    </div>
  )
}

export default Home