import Navbar from "@/Componet/Navber";
import Footer from "@/Componet/Footer";
import FloatingChatButton from "@/Componet/FloatingChatButton";
import { CartProvider } from "@/context/CartContext";

export default function MainLayout({ children }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FCFBF7]">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingChatButton />
      </div>
    </CartProvider>
  );
}