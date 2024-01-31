import styles from "./VideoList.module.css";
import Card from "../Card/Card";

function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "vídeos" : "vídeo";
    heading = `${count} ${noun}`;
  }

  return (
    <>
   
   <h3 >{heading}</h3>
      <section className={styles.videoList}>
        
        {videos.map((video) => (
          <Card id={video.id} key={video.id} />
        ))}
      </section>
    </>
  );
}

export default VideoList;


// Esta page teve alguns problemas que ainda não entendi - erros no videos length e 