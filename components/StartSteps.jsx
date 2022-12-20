import styles from "../styles";

const StartSteps = ({ number, text, image, invertColor }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <img
        src={image ?? "/headset.svg"}
        alt="headset"
        className="w-[30px] h-[30px]"
        style={invertColor ? { filter: "invert(1)" } : {}}
      />
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[14px] md:text-[18px] text-[#B0B0B0] leading-[22.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
