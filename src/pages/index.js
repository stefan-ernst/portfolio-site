import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ModalImage from "../../docs/components/ModalImage";


function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const [showImage, setShowImage] = useState();

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Portfolio Map for Jira lets you manage your companies portfolio and align your business strategies.
            Combine your strategic initiatives with real world data from Jira.">
            <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ marginTop:-50,padding:'5rem 0 4rem 0'}}>
                <div className="container" style={{paddingTop:'2rem'}}>
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>

                    <img src="/img/denkplan2.png" alt="Denkplan Logo" />
                    <br />

                    <img src="/img/PF1.png" style={{width: '40rem'}} alt="Portfolio Map for Jira Hero Image"/>

                    <br/>
                    <div style={{margin: 5}}>Available on the</div>
                    <img src="/img/neutral-marketplace.svg" style={{width: '20rem'}} alt="Atlassian Marketplace Logo"/>
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

        </Layout>
    );
}

export default Home;
