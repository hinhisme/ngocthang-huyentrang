import React from "react";
import { motion } from "framer-motion";

const InvitationCard = () => {
  return (
    <motion.section
      className="text-center py-16 px-6 bg-white/70 rounded-2xl shadow-sm backdrop-blur-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-lg font-playfair font-semibold tracking-widest mb-8">
        THIỆP MỜI
      </h2>

      <div className="flex flex-col font-playfair md:flex-row justify-center items-center mb-10">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <p className="font-semibold">NHÀ TRAI</p>
          <p>ÔNG: Phan Văn Hiền</p>
          <p>BÀ: Trịnh Thị Hiên</p>
        </div>

        <div className="hidden md:block w-px h-16 mx-10"></div>

        <div className="md:w-1/3">
          <p className="font-semibold">NHÀ GÁI</p>
          <p>BÀ: Đinh Thị Sửu</p>
        </div>
      </div>

      <p className="font-playfair mb-6">
        ĐẾN DỰ BUỔI TIỆC CHUNG VUI CỦA GIA ĐÌNH CHÚNG TÔI
      </p>

      <h3 className="text-4xl font-['Great_Vibes'] text-pink-500 mb-3 animate-fade-in relative z-10">
        Phan Khởi
      </h3>
      <p className="text-[#78753c] font-playfair text-xl font-light mb-2">&</p>
      <h3 className="text-4xl font-['Great_Vibes'] text-pink-500 mb-3 animate-fade-in relative z-10">
        Lê Thúy
      </h3>

      <p className="font-playfair tracking-widest font-medium">THÂN MỜI</p>

      <div className="mt-10 border-t border-gray-400 w-1/2 mx-auto" />
    </motion.section>
  );
};

export default InvitationCard;
