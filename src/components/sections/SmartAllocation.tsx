"use client";

import { motion } from "framer-motion";
import { productTypes } from "@/data/product-types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function SmartAllocation() {
    return (
        <section className="w-full py-24 px-4 bg-black/60 backdrop-blur-md relative overflow-hidden">
             {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-[#4285F4] rounded-full blur-[150px]" />
                <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-[#34A853] rounded-full blur-[150px]" />
            </div>

            <div className="w-[90%] max-w-7xl mx-auto space-y-20 relative z-10">
                <SectionHeading 
                    badge="Smart Allocation Logic"
                    title="ĐA DẠNG HÓA"
                    highlight="SẢN PHẨM"
                    highlightColor="blue"
                    desc="Hệ thống tự động nhận diện loại hình sản phẩm để kích hoạt các bộ Skill chuyên biệt tương ứng."
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {productTypes.map((prod, i) => (
                        <ProductCard key={i} product={prod} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductCard({ product, index }: { product: any, index: number }) {
    const colorMap: Record<string, string> = {
        blue: "border-[#4285F4]/30 hover:shadow-[0_0_40px_rgba(66,133,244,0.2)]",
        red: "border-[#EA4335]/30 hover:shadow-[0_0_40px_rgba(234,67,53,0.2)]",
        yellow: "border-[#FBBC04]/30 hover:shadow-[0_0_40px_rgba(251,188,4,0.2)]",
        green: "border-[#34A853]/30 hover:shadow-[0_0_40px_rgba(52,168,83,0.2)]",
    };
    
    const iconColorMap: Record<string, string> = {
        blue: "text-[#4285F4]",
        red: "text-[#EA4335]",
        yellow: "text-[#FBBC04]",
        green: "text-[#34A853]",
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
                "group h-full p-8 rounded-[2rem] border bg-[#080808] hover:bg-[#111] transition-all duration-500 flex flex-col items-center text-center",
                colorMap[product.color]
            )}
        >
            <div className={cn("mb-6 w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500", iconColorMap[product.color])}>
                <product.icon className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{product.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{product.desc}</p>

            <div className="w-full pt-6 border-t border-white/5">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">Skills Activated</div>
                <div className="flex flex-wrap justify-center gap-2">
                    {product.activeSkills.map((skill: string, j: number) => (
                        <span key={j} className="text-xs px-2 py-1 rounded bg-white/5 text-white/70 border border-white/5">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
