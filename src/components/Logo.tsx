import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative h-8 w-8 overflow-hidden rounded-full">
        <div className="absolute inset-0 vr-gradient animate-pulse-glow"></div>
        <div className="absolute inset-1 flex items-center justify-center rounded-full bg-white dark:bg-vra-deepBlue">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-vra-blue to-vra-purple">VR</span>
        </div>
      </div>
      <span className="text-xl font-bold tracking-tighter">
        <span className="vr-gradient-text">VRA</span>
        <span className="text-foreground"> academy</span>
      </span>
    </Link>
  );
};

export default Logo;