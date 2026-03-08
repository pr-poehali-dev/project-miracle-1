import { motion } from "framer-motion"

export default function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {/* Top header */}
      <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="flex flex-col items-center gap-1"
        >
          <h1
            className="text-2xl md:text-4xl font-bold tracking-widest"
            style={{
              color: "hsl(var(--primary))",
              textShadow: "0 0 30px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.3)",
              fontFamily: "'Cinzel Decorative', serif",
            }}
          >
            Зачарованный лес
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase"
            style={{
              color: "hsl(var(--forest-gold))",
              fontFamily: "'Cinzel', serif",
              textShadow: "0 0 20px hsl(var(--forest-gold) / 0.5)",
            }}
          >
            Место, где живут истории
          </motion.p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="flex items-center gap-3 mt-1"
        >
          <div className="h-px w-16 md:w-24" style={{ background: "linear-gradient(to right, transparent, hsl(var(--primary) / 0.6))" }} />
          <span style={{ color: "hsl(var(--primary) / 0.8)", fontSize: "10px" }}>✦</span>
          <div className="h-px w-16 md:w-24" style={{ background: "linear-gradient(to left, transparent, hsl(var(--primary) / 0.6))" }} />
        </motion.div>
      </div>

      {/* Bottom hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2"
      >
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Cinzel', serif" }}
        >
          Перетащи, чтобы исследовать
        </p>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "hsl(var(--primary) / 0.6)", fontSize: "18px" }}
        >
          ↕
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2"
        style={{ borderColor: "hsl(var(--primary) / 0.3)" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2"
        style={{ borderColor: "hsl(var(--primary) / 0.3)" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2"
        style={{ borderColor: "hsl(var(--primary) / 0.3)" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2"
        style={{ borderColor: "hsl(var(--primary) / 0.3)" }}
      />
    </div>
  )
}
