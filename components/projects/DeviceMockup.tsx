import Image from 'next/image';
import styles from './DeviceMockup.module.css';

type DeviceMockupProps = {
  title: string;
  desktopImage: string;
  mobileImage: string;
};

export default function DeviceMockup({ title, desktopImage, mobileImage }: DeviceMockupProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.laptop}>
        <div className={styles.display}>
          <span className={styles.camera} aria-hidden="true" />
          <Image src={desktopImage} alt={`Versão desktop da loja ${title}, em um notebook`} width={1370} height={874} sizes="(min-width: 768px) 500px, 76vw" className={styles.desktopScreen} />
        </div>
        <div className={styles.base} aria-hidden="true"><span /></div>
      </div>
      <div className={styles.phone}>
        <Image src={mobileImage} alt={`Versão mobile da loja ${title}, em um celular`} width={390} height={844} sizes="(min-width: 768px) 124px, 20vw" className={styles.mobileScreen} />
      </div>
    </div>
  );
}
