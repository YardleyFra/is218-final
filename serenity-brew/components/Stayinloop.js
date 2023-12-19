
import styles from './footer.module.css';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className={styles.social}>
       <Image 
        src="/images/footer.png" // Assuming your image is in public/images
        alt="Description of the image"
        width={100} // Set the width as required
        height={0} // Set the height as required
        layout="responsive" // Optional: Adjusts image size to the parent element's width
      />
    </footer>
  );
};

export default Footer;
