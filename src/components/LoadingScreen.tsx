import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at center, hsl(150 35% 6%) 0%, hsl(150 30% 3%) 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, hsl(142 60% 15% / 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="text-center relative z-10 flex flex-col items-center gap-6">
        {/* Rune circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border"
          style={{
            borderColor: "hsl(var(--primary) / 0.3)",
            boxShadow: "0 0 20px hsl(var(--primary) / 0.2), inset 0 0 20px hsl(var(--primary) / 0.1)",
          }}
        >
          <div
            className="w-full h-full rounded-full border"
            style={{ borderColor: "hsl(var(--primary) / 0.15)", borderStyle: "dashed" }}
          />
        </motion.div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "1.5rem",
              color: "hsl(var(--primary))",
              textShadow: "0 0 20px hsl(var(--primary) / 0.5)",
            }}
          >
            Зачарованный лес
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0.4, 0.7] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            Открываю врата...
          </motion.p>
        </div>

        {/* Progress bar */}
        <motion.div
          className="relative h-px w-48 overflow-hidden"
          style={{ background: "hsl(var(--border))" }}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, transparent, hsl(var(--primary)), hsl(var(--forest-gold)))",
              boxShadow: "0 0 8px hsl(var(--primary) / 0.8)",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
