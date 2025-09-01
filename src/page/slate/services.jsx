//import { Button } from "@/components/ui/button";
//import { Card, CardContent } from "@/components/ui/card";
//import { motion } from "framer-motion";
//import { ShoppingCart, CreditCard, Laptop, Smartphone, Tablet, Monitor, BatteryCharging, Power } from "lucide-react";

export default function ServicesPage() {
  const products = [
    { icon: <Laptop className="w-10 h-10 text-blue-600" />, title: "Laptops", desc: "Portable, sleek, and powerful." },
    { icon: <Smartphone className="w-10 h-10 text-green-600" />, title: "Phones", desc: "Long-lasting, stylish, and smart." },
    { icon: <Power className="w-10 h-10 text-red-600" />, title: "UPS Systems", desc: "Backup power that keeps you connected." },
    { icon: <BatteryCharging className="w-10 h-10 text-purple-600" />, title: "Power Banks", desc: "Reliable energy on the go." },
    { icon: <Monitor className="w-10 h-10 text-orange-600" />, title: "Desktops", desc: "For training centers, offices, and professionals." },
    { icon: <Tablet className="w-10 h-10 text-pink-600" />, title: "Tablets", desc: "Flexibility for managers, consultants, and entrepreneurs." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">
          At <span className="font-semibold text-blue-600">Smart Tech</span>, we provide not just gadgets but smart solutions. Get the latest tech devices today with the flexibility to <span className="font-semibold">Buy Now and Pay Later</span>.
        </p>
      </motion.div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="shadow-lg rounded-2xl border-none hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{product.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600">{product.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Installment Plan Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-xl p-10 max-w-5xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Buy Now, Pay Later</h2>
        <p className="text-gray-600 text-center mb-8">
          Own your dream device today and spread payments over time with our <span className="font-semibold text-blue-600">flexible installment plan</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-md border-none p-6 text-center">
            <ShoppingCart className="w-10 h-10 mx-auto mb-3 text-blue-600" />
            <h3 className="font-semibold">Choose Product</h3>
            <p className="text-gray-500 text-sm">Pick a Laptop, Phone, UPS, or more.</p>
          </Card>
          <Card className="shadow-md border-none p-6 text-center">
            <CreditCard className="w-10 h-10 mx-auto mb-3 text-green-600" />
            <h3 className="font-semibold">Make Deposit</h3>
            <p className="text-gray-500 text-sm">Pay a small initial deposit.</p>
          </Card>
          <Card className="shadow-md border-none p-6 text-center">
            <CreditCard className="w-10 h-10 mx-auto mb-3 text-purple-600" />
            <h3 className="font-semibold">Flexible Payments</h3>
            <p className="text-gray-500 text-sm">Spread the balance monthly.</p>
          </Card>
          <Card className="shadow-md border-none p-6 text-center">
            <Laptop className="w-10 h-10 mx-auto mb-3 text-orange-600" />
            <h3 className="font-semibold">Enjoy Your Device</h3>
            <p className="text-gray-500 text-sm">Use your gadget while you pay.</p>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-md">
            Apply for Installment
          </Button>
        </div>
      </motion.div>

      {/* Closing Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Smart Tech?</h2>
        <p className="text-gray-600 mb-6">
          We believe technology should be <span className="font-semibold text-blue-600">accessible to everyone</span>. Whether you’re a student, entrepreneur, or enterprise, we make it possible to own premium gadgets without financial stress.
        </p>
        <Button size="lg" className="bg-blue-600 text-white rounded-full shadow-lg">
          Shop Now
        </Button>
      </motion.div>
    </div>
  );
}
