import styles from './index.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AudioPlayerComponent from '../musicList';




function ScreenMenu() {

    return (
        <div>
            <header className={styles.AppHome}>
                <div>
                </div>
                
                <div>
                    <AudioPlayerComponent/>
                </div>
            </header>
        </div>
    );
}

export default ScreenMenu;
