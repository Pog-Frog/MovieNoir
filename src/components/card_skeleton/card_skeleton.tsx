import './card_skeleton.css';

interface Props {
  repeat: number;
  className?: string;
};

const CardSkeleton: React.FC<Props> = ({ repeat, className }) => {
  return (
    <>
      {Array.from({ length: repeat }, (_, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-xl bg-[#252525] shadow-lg aspect-[1/1.5] ${
            className || ""
          }`}
        >
          <div className="shimmer-wrapper absolute top-0 left-0 w-full h-full animate-loading">
            <div className="shimmer w-1/2 h-full transform -skew-x-20 bg-[rgba(255,255,255,0.2)] shadow-[0_0_30px_30px_rgba(255,255,255,0.2)]" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSkeleton;