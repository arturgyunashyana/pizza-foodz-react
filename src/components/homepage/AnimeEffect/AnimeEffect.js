import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './animeeffect.scss'
import { Parallax } from 'react-parallax'
import AnimeBg from "../../../assets/images/anime-bg.webp";
import AnimeIcon from '../../../assets/images/animeicon.webp'
import Sigar from '../../../assets/images/sigar.webp'
import BorderFon from '../../../assets/images/border-fon.webp'

export default function AnimeEffect() {

    const [anime, setAnime] = useState({
        width: 0,
        height: 0,
        moveX: "",
        moveY: ""
    })

    useEffect(() => {

    })

    const styles = StyleSheet.create({
        textOne: {
            fontSize: 32,
            color: 'rgb(242,235,192)',
            letterSpacing: "0",
            fontFamily: "Oswald",
            fontWeight: "200"
        },
        textSecond: {
            fontSize: 35,
            color: 'rgb(242,235,192)',
            fontWeight: "700",
            letterSpacing: "0",
            fontFamily: "Oswald",
        },
        textThree: {
            fontSize: 60,
            color: 'rgb(242,235,192)',
            fontWeight: "700",
            fontFamily: "Oswald",
        }
    });

    return (
        <Parallax bgImage={AnimeBg} strength={-300}>
            <div className="animeEffect">
                <div className="animeEffect__container">
                    <div className="animeEffect__info">
                        <div className="animeEffect__contentFirst">
                            <img
                                 className='animeEffect__fon'
                                 src={AnimeIcon}
                                 alt="animeIcon"
                            />
                            <View>
                                <Text
                                    className="animeEffect__text"
                                    style={styles.textOne}
                                >
                                    MON - FRI 7PM-8PM
                                </Text>
                                <Text
                                    className="animeEffect__text"
                                    style={styles.textSecond}
                                >
                                    VISIT US FOR HAPPY HOUR!
                                </Text>
                                <Text
                                    className="animeEffect__text"
                                    style={styles.textThree}
                                >
                                    15% OFF
                                </Text>
                            </View>
                        </div>

                        <div className="animeEffect__contentSecond">
                            <img
                                 className="animeEffect__imgOne"
                                 src={Sigar} alt="sigar"
                            />
                            <img
                                className="animeEffect__imgSecond"
                                src={BorderFon} alt="borderFon"/>
                        </div>

                        <div className="animeEffect__contentThree">
                            <p className="animeEffect__paragraph">
                                Sed dictum eros nec sapien ultricies,
                                sit amet vulputate tellus congue.
                                Aenean viverra porta nulla, et auctor
                                lacus convallis ut.
                            </p>
                            <button type="button" className="animeEffect__btn">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}
