import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Frontend Developer',
        1000,
        'Backend Developer',
        1500,
        'Web Designer',
        1500,
        'Coder',
        1500,
        'Programmer',
        1500,
        'Full Stack Web Developer',
        1500
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '1em', display: 'inline-block', color: "#55e6a5"}}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;