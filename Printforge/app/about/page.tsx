import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4 p-4 md:px-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <Image
          src="/hero-image-square.png"
          alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
          width={740}
          height={740}
          className="w-full max-w-md shadow-sm md:min-w-96"
        />

        <div className="space-y-4 md:space-y-6">
          <small className="text-gray-400 uppercase">About printforge</small>
          <h1 className="text-5xl font-bold">Empowering makers worldwide</h1>
          <p className="text-gray-700">Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
          <p className="text-gray-700">Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
        </div>
      </div>

      <hr className="my-6" />

      <div className="flex flex-col items-center justify-center gap-8 p-4 md:px-10 md:flex-row md:items-start md:justify-between">
        <article>
          <h2 className="mb-4 text-2xl font-bold">100k+ Models</h2>
          <p className="text-gray-700">Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
        </article>
        <article className="md:border-r md:border-l md:border-gray-400 md:px-8">
          <h2 className="mb-4 text-2xl font-bold">Active Community</h2>
          <p className="text-gray-700">Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
        </article>
        <article>
          <h2 className="mb-4 text-2xl font-bold">Free to Use</h2>
          <p className="text-gray-700">Most models are free to download, with optional premium features for power users.</p>
        </article>
      </div>

      <hr className="my-6" />

      <article className="p-4 m-auto space-y-6 md:w-1/2">
        <h2 className="text-3xl font-bold">Our Vision</h2>
        <p className="text-gray-700">At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.</p>
        <hr className="w-8/12 m-auto border-black md:w-4/12 md:border-gray-300" />
        <p className="text-gray-700">Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.</p>
      </article>
    </section>
  );
}
