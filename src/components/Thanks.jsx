export default function Thanks() {
  return (
    <footer className="py-6 font-playfair text-center text-gray-600 text-sm">
      <p>Chân thành cám ơn sự quan tâm và lời chúc phúc của bạn!</p>

      <p className="text-2xl font-['Great_Vibes'] text-pink-500 mb-3 flex items-center justify-center gap-2">
        Phan Khởi 
        <span className="heart">❤️</span>
        Lê Thúy
      </p>

      <style>{`
        .heart{
          display:inline-block;
          animation: heartbeat 1.6s ease-in-out infinite;
          filter: drop-shadow(0 0 6px rgba(255, 80, 120, 0.7));
        }

        @keyframes heartbeat{
          0%{ transform:scale(1); }
          15%{ transform:scale(1.25); }
          30%{ transform:scale(1); }
          45%{ transform:scale(1.18); }
          60%{ transform:scale(1); }
          100%{ transform:scale(1); }
        }
      `}</style>
    </footer>
  );
}