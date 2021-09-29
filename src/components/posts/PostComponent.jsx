import React from 'react'
import Image from 'next/image';
export default function PostComponent() {
  return (
    <div>
      <div>
        <Image
          alt="post component"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          layout="fill"
        />
      </div>
      <div>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>  
  );
}
