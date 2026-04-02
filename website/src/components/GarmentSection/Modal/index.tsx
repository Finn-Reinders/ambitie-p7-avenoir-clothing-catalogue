import React from 'react'
import ReactDOM from 'react-dom'
// import './Modal.css'
import { motion, AnimatePresence, cubicBezier } from "framer-motion"

const MODAL_STYLES: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100vh',
    padding: '400px',
    zIndex: 1000,
    backgroundColor: '#C9CCD1',    
};

const swipeIn = {
    hidden: {
        x:'-50vw',
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: cubicBezier(0.76, 0, 0.24, 1)
        }
    },
    exit: {
        x:'-50vw',
        opacity: 0,
    },
}


const OVERLAY_STYLES: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    zIndex: 1000,
};
const CLOSE_BUTTON_STYLES: React.CSSProperties = {
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: 5
}

export default function Modal({ open, children, onClose }: { open: boolean; children?: React.ReactNode; onClose: () => void }) {
    const [mounted, setMounted] = React.useState(false);
    
    React.useEffect(() => {
        setMounted(true);
    }, []);
    
    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);
    
    if (!mounted) return null;
    
    const portalElement = document.getElementById('portal');
    if (!portalElement) return null;
    
    return ReactDOM.createPortal(
        <AnimatePresence 
            initial={false}
            mode="wait"
            onExitComplete={() => null}
        >
            {open && (
            <>
            {/* Backdrop Overlay */}
                <motion.div style={OVERLAY_STYLES} onClick={onClose} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                />  
            {/* Modal Content */}
                <motion.div style={MODAL_STYLES} 
                variants={swipeIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                    <button style={CLOSE_BUTTON_STYLES} onClick={onClose}>Close Modal</button>
                {children}
                </motion.div>
        </>
        )}
    </AnimatePresence>,
    document.getElementById('portal')
  )
}