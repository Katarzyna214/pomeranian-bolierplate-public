import './styles.css';

export const RoundImage = (props) => {
  // console.log('To są propsy!', props)
  const { title, src, width, height, color } = props;

  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: color,
      }}
    >
      {title}
      <img src={src} alt={title} />{' '}
    </div>
  );
  // {props.title}<img src ={props.src}alt={props.title}/>
};
