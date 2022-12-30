import React, {useEffect} from 'react';
import classNames from 'classnames';
import Image from '../../components/elements/Image';
import Cta from '../../components/sections/Cta';
import { useLocation} from 'react-router-dom';

const KnowYourTrainer = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.scrollTo(0,0)
  }, [routePath]);

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );
    // eslint-disable-next-line
    const tilesClasses = classNames(
        'tiles-wrap center-content'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className='section-inner' style={{ paddingTop: 70, width: '80%', marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image
                            src={require('./../../assets/images/Coach.jpeg')}
                            alt="Features split 01"
                            width={500}
                            height={300}
                            style={{ margin: 0 }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: 20 }}>
                            <Image
                                src={require('./../../assets/images/AKT_Badge.svg')}
                                width={100}
                            />
                            <Image
                                src={require('./../../assets/images/PSMIII_Badge.svg')}
                                width={80}
                            />
                        </div>

                    </div>
                </div>
                <h3>
                    Vikas Agarwal
                </h3>
                <div className="container-xl">
                    <p className="m-0 mb-32">
                        AKT, PMP®, PSM-I, PSM-II, PSM-III, KMP, PSPO-I, SPC, PSD-I, PAL-e, CAL-1, ITIL V3 F
                    </p>
                </div>

            </div>
            <div className='row' style={{ marginBottom: 20 }}>
                <div className='col'>

                </div>
            </div>

            <div style={{ marginRight: '20%', marginLeft: '20%' }}>
                <div className="features-tiles-item-content split-item" style={{ textAlign: 'left', marginBottom: 80 }}>
                    <ul>
                        <li className="text-sm">
                        Vikas is a Program Manager, Agile Coach, Scrum Master, Kanban Practitioner, author, and speaker with 23 years of experience who has previously worked as a developer, product owner, and business analyst. 
                    </li>
                        <li className="text-sm">
                        Vikas has delivered from small-sized projects to multi-million dollar deals across the US, UK, Japan, UAE, Australia, and Asia, spanning multiple domains, including education, banking, CTRM, B2B, and B2C. He believes in enhancing business agility and creates a psychologically safe team environment.
                    </li>
                        <li className="text-sm">
                        Vikas is an AKT (Accredited Kanban Trainer) from Kanban University and holds Professional Scrum Master – III Certification.
                    </li>
                        <li className="text-sm">
                        Vikas is one of the Content Creators for Kanban Maturity Model and actively contributes to the learning modules of Kanban.
                    </li>
                        <li className="text-sm">
                        Vikas has created and implemented FISH Model (to enhance business agility) for the delivery of key strategic initiatives. 
                        </li>
                        <li className="text-sm">
                        Vikas is one of the distinguished writers in Serious Scrum publication on Medium.com. He writes about the actual challenges in Agile transformation and how to overcome those.
                    </li>
                        <li className="text-sm">
                        Vikas was featured in “The Agile Podcast: Scrum Mastery Challenge” run by Geoff Watt and Paul Goddard.
                        </li>
                        
                        <li className="text-sm">
                        Vikas actively participates in Agile conferences worldwide. One of his Kanban implementations was presented in Kanban India Conference in Dec, 2021. <a href="https://www.kanbanindia.org/speakers/vikas-agarwal/" target="_blank">https://www.kanbanindia.org/speakers/vikas-agarwal/</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Cta split />
        </section>
    );
}

export default KnowYourTrainer;