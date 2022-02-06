module.exports = {
    title: 'Denkplan Portfolio Map for Jira',
    tagline: 'Align your strategic initiatives with real world data',
    url: 'https://www.portfoliomapping.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/fav_32x32.png',
    organizationName: 'Realigned Technologies Ltd', // Usually your GitHub org/user name.
    projectName: 'portfolio-site', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true
        },
        navbar: {
            style: 'primary',
            title: 'Denkplan Portfolio Map for Jira',
            logo: {
                alt: 'Portfolio Map for Jira Logo',
                src: 'img/denkplan.png',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Documentation',
                    position: 'left',
                },
                {
                    to: 'https://marketplace.atlassian.com/1226527',
                    label: 'Try Free',
                    position: 'left',
                    target: '_blank'
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Other Apps',
                    items: [
                        {
                            label: 'Story Mapping for Jira',
                            to: 'https://storymapping.app',
                        },
                        {
                            label: 'Journey Mapping for Jira',
                            to: 'https://journeymapping.app',
                        },
                        {
                            label: 'Personas for Jira',
                            to: 'https://betterpersonas.app',
                        },
                    ],
                },
                {
                    title: 'Important Links',
                    items: [
                        {
                            label: 'Support',
                            href: 'https://realignedtechnologies.atlassian.net/servicedesk/customer/portals',
                            target: '_blank'
                        },
                        {
                            label: 'EULA',
                            href: 'https://docz.realignedtechnologies.com/eula',
                        },
                        {
                            label: 'Privacy',
                            href: 'https://docz.realignedtechnologies.com/privacypolicy',
                        },
                    ],
                },
                {
                    title: 'Denkplan',
                    items: [
                        {
                            label: "Denkplan Philosophy",
                            to: 'https://denkplan.com/philosophie/?lang=en',
                            target: '_blank'
                        },
                        {
                            label: 'About Denkplan',
                            href: 'https://denkplan.com/verein/?lang=en',
                            target: '_blank'
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Realigned Logo',
                src: '/img/RealignedBlue.svg',
            },
            copyright: `Copyright © ${new Date().getFullYear()} Realigned Technologies Ltd. `,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.

                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.

                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    scripts: [
        {
            /** <script async defer data-domain="storymapping.app" src="https://plausible.io/js/plausible.js"></script> **/
            src: "https://plausible.io/js/plausible.js",
            "data-domain": "betterpersonas.app",
            async: true,
            defer: true
        }
    ],
};
