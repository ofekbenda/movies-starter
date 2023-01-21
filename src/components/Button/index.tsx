import styles from "./Button.module.scss";

type Props = {
  text: string;
  callback: () => void;
  disabled: boolean;
};

const Button = ({ text, callback, disabled }: Props) => (
  <button disabled={disabled} className={`${styles.wrapper} ${disabled && styles.disabled}`} type="button" onClick={callback}>
    {text}
  </button>
);

export default Button;
