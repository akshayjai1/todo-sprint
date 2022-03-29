interface IpPlus {
  scale?: number;
}
export const Plus = ({ scale }: IpPlus) => {
  return (
    <svg
      style={{ transform: `scale(${scale || 1.3})` }}
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 9.5V5.5M5 5.5V1.5M5 5.5H9M5 5.5H1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
