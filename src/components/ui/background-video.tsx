"use client";

export function BackgroundVideo() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1] pointer-events-none">
       {/* Solid background to prevent flashing */}
       <div className="absolute inset-0 bg-[#05070a]" />
       
       {/* YouTube Background Iframe 
           - Optimized sizing to cover screen without excessive zoom
           - Mute & Autoplay enabled for browser policy compliance
           - Playlist param matches Video ID to enable looping
       */}
       <div className="absolute inset-0 w-full h-full flex items-center justify-center">
         <iframe
           className="w-full h-full min-w-[100vw] min-h-[56.25vw] opacity-40 grayscale-[20%] pointer-events-none mix-blend-screen"
           src="https://www.youtube.com/embed/HIvqw74pCFc?autoplay=1&mute=1&controls=0&loop=1&playlist=HIvqw74pCFc&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&autohide=1"
           allow="autoplay; encrypted-media"
           title="Background Video"
           style={{ 
             pointerEvents: 'none',
             aspectRatio: '16 / 9',
             objectFit: 'cover'
           }}
         />
       </div>
       
       {/* Overlay for better text readability */}
       <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/80 via-[#05070a]/40 to-[#05070a]/90" />
       
       {/* Dot texture overlay */}
       <div className="absolute inset-0 bg-[url('/grid-texture.png')] opacity-10" />
    </div>
  );
}
