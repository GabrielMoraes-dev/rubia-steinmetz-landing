import { useInView } from "../hooks/useInView";

const hidden = {
  up: "opacity-0 translate-y-10 scale-[0.97]",
  left: "opacity-0 -translate-x-10 scale-[0.97]",
  right: "opacity-0 translate-x-10 scale-[0.97]",
};

export default function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className = "",
  ...rest
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-[900ms] ease-premium ${
        inView
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : hidden[direction]
      } ${inView ? "" : "will-change-transform"} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
