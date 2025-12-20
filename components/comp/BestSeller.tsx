
import React from 'react'
import ProductCard from './Productcard'
import { products } from '@/lib/products'
import { Reveal } from './reveal'

const BestSeller = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto pt-10">
          <Reveal>
          <div className="text-left mb-16">
            <h3 className="text-4xl text-neutral-900 mb-4 lg:text-6xl">
              <span className="italic font-light">BestSeller</span>
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Discover our most beloved pieces, each crafted with meticulous attention to detail and timeless design
              principles.
            </p>
          </div>
        </Reveal>

        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default BestSeller

