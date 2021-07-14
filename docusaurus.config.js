module.exports = {
    title: 'Personas for Jira',
    tagline: 'Focus on your customers and their goals - combine UX personas with Jira Issues',
    url: 'https://www.betterpersonas.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/PersonaAppIcon.svg',
    organizationName: 'Realigned Technologies Ltd', // Usually your GitHub org/user name.
    projectName: 'personas', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true
        },
        navbar: {
            style: 'dark',
            title: 'Personas for Jira',
            logo: {
                alt: 'Personas for Jira Logo',
                src: 'img/PersonaIconBare.svg',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Documentation',
                    position: 'left',
                },
                {
                    to: 'https://marketplace.atlassian.com/1224417',
                    label: 'Try Free',
                    position: 'left',
                    target: '_blank'
                },
            ],
        },
        footer: {
            style: 'dark',
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
                            label: 'Read Confirmations for Confluence',
                            to: 'https://realigned.io/readconfirmations',
                        },
                        {
                            label: 'Personal Dashboards for Confluence',
                            to: 'https://realigned.io/personaldashboards',
                        },
                        {
                            label: 'Enhanced Sharing for Confluence',
                            to: 'https://realigned.io/enhancedsharing',
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
                    title: 'Consultancy',
                    items: [
                        {
                            label: "Realigned Services",
                            to: 'https://realigned.ch',
                            target: '_blank'
                        },
                        {
                            label: 'Realigned Learning',
                            href: 'https://realigned.work',
                            target: '_blank'
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Realigned Logo',
                src: '/img/RealignedLogo.svg',
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
