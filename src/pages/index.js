import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ModalImage from "../../docs/components/ModalImage";

const features = [
    {
        title: 'Manage & Prioritize',
        imageUrl: 'img/SME2.webp',
        description: (
            <>
                Story Mapping for Jira was designed from the ground up to be easily installed and
                used to get your team up and running quickly
            </>
        ),
    },
    {
        title: 'Focus on what Matters',
        imageUrl: 'img/SME1.webp',
        description: (
            <>
                Easily manage and plan your next sprint or release right from the story map.
            </>
        ),
    },
    {
        title: 'Fully integrated',
        imageUrl: 'img/SME4.webp',
        description: (
            <>
                Create releases, sprints, add and edit issues - all without leaving the app
            </>
        ),
    },
];

const proFeatures = [
    {
        title: 'Define custom goals',
        imageUrl: 'img/SME5.webp',
        description: (
            <>
                Custom goals allow you to structure your epics with overarching themes
            </>
        ),
    },
    {
        title: 'Use timeframes instead of sprints',
        imageUrl: 'img/SME6.webp',
        description: (
            <>
                Using sprints for story mapping can be very limiting. Plan long term with custom timeframes.
            </>
        ),
    },
    {
        title: 'Estimate tickets from the story map',
        imageUrl: 'img/SME7.webp',
        description: (
            <>
                Plan your next iteration & easily add story points estimates to issues
            </>
        ),
    },
];

function Feature({imageUrl, title, description, setShowImage}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <>
            <div className={clsx('col col--4 text--center', styles.feature)}>
                {imgUrl && (
                    <div className="text--center" style={{cursor:'pointer'}}>
                        <img onClick={() => setShowImage(imgUrl)} className={styles.featureImage} src={imgUrl} alt={title}/>
                    </div>
                )}
            </div>
        </>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const [showImage, setShowImage] = useState();

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ transform: 'skewY(-2deg)',marginTop:-50,padding:'5rem 0 4rem 0'}}>
                <div className="container" style={{transform: 'skewY(+2deg)',paddingTop:'2rem'}}>
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <img src="/img/Musician.png" style={{width: '40rem'}} alt="Personas for Jira Hero Image"/>

                    <br/>
                    <div style={{margin: 5}}>Available on the</div>
                    <img src="/img/white-marketplace.svg" style={{width: '20rem'}} alt="Atlassian Marketplace Logo"/>
                    <br/><br/>

                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--primary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
                        </Link> &nbsp;
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={"https://marketplace.atlassian.com/1224357"}>
                            Try free
                        </Link>
                    </div>
                </div>
            </header>
            <main className='frontpage'>
                {showImage && <ModalImage onClose={() => setShowImage(undefined)} src={showImage} />}

                <div style={{margin:'auto',maxWidth:300,textAlign:'center'}}><h2>Features</h2>
                <br /></div>


                <div className='heroBox'>
                    <div className='heroBox-text'>
                        <h2>Fully integrated</h2>
                        Enrich Jira issues with Persona profiles. Give your team and stakeholders added context
                        for requirements. Understand your customers better.

                    </div>
                    <img src="/img/Persona1.png" style={{width:466,height:'auto',maxHeight:270}} />

                </div>

                <br />

                <div className="heroBox">

                    <div className='heroBox-text'>
                        <h2>Edit on the fly</h2>
                        <ul>
                            <li>Edit your Personas quickly with just a few clicks
                            </li>
                            <li>Assign issues centrally, manage all your customer requirements in one place</li>
                        </ul>
                    </div>
                    <img src="/img/PersonaFrame.png" style={{width:494,height:'auto',maxHeight:375}} />



                </div>

                <br />

                <div className='heroBox'>

                    <div className='heroBox-text'>
                        <h2>Fits your needs</h2>
                        <ul>
                            <li>Make persona management work for you</li>
                            <li>Create custom fields to capture anything you want</li>
                            <li>Define fields per project or globally - if you need them anywhere in Jira</li>
                        </ul>

                    </div>
                    <img src="/img/Fields.png" style={{width:493,height:'auto',maxHeight:458}} />

                </div>

                <br />
                <br />


            </main>
        </Layout>
    );
}

export default Home;
