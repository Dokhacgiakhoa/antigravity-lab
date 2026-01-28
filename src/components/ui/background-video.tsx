"use client";

export function BackgroundVideo() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1] pointer-events-none">
       {/* Solid background to prevent flashing */}
       <div className="absolute inset-0 bg-[#05070a]" />
       
       {/* YouTube Background Iframe 
           - Scale 300% to ensure coverage on all screens and hide YouTube UI/Controls
           - Mute & Autoplay enabled for browser policy compliance
           - Playlist param matches Video ID to enable looping
       */}
       <iframe
         className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 opacity-50 grayscale-[30%] pointer-events-none mix-blend-screen"
         src="https://www.youtube.com/embed/6D4uoH3-lKM?autoplay=1&mute=1&controls=0&loop=1&playlist=6D4uoH3-lKM&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1"
         allow="autoplay; encrypted-media"
         title="Background Video"
         style={{ pointerEvents: 'none' }}
       />
       
       {/* Overlay for better text readability */}
       <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/60 to-[#05070a]/95" />
       
       {/* Dot texture overlay */}
       <div className="absolute inset-0 bg-[url('/grid-texture.png')] opacity-10" />
    </div>
  );
}
