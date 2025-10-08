import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 items-start">
        
        {/* Kolom 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Hubungi Kami</h3>
          <p className="text-gray-400 max-w-sm">
            Punya pertanyaan? Kami siap melayani Anda
          </p>
        </div>

        {/* Kolom 2 - Indonesia */}
        <div>
          <h4 className="text-lg font-medium mb-4">Indonesia</h4>
          <div className="space-y-2 text-gray-200">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-gray-400" />
              <span>(+62) 818 343 494</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>cs@pasarpolis.co.id</span>
            </div>
          </div>
        </div>

        {/* Kolom 3 - Thailand */}
        <div>
          <h4 className="text-lg font-medium mb-4">Thailand</h4>
          <div className="space-y-2 text-gray-200">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-400" />
              <span>+662 153 9589</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>customerserviceth@pasarpolis.co.id</span>
            </div>
          </div>
        </div>

        {/* Kolom 4 - Vietnam */}
        <div >
          <h4 className="text-lg font-medium mb-4">Vietnam</h4>
          <div className="space-y-2 text-gray-200 mb-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-400" />
              <span>0900 232454</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>cksh@pasarpolis.co.id</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
