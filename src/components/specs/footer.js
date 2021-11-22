const logoIcon = "https://dn96iqv3kf32j.cloudfront.net/footer/static/imgs/logo-icon.svg"
const facebook = "https://dn96iqv3kf32j.cloudfront.net/footer/static/imgs/facebook.svg"
const instagram = "https://dn96iqv3kf32j.cloudfront.net/footer/static/imgs/instagram.svg"
const linkedin = "https://dn96iqv3kf32j.cloudfront.net/footer/static/imgs/linkedin.svg"

const footer = {
    block1: {
        logoImage: logoIcon,
        copyrightText: <>Copyright 2020 © NirogGyan<br />All rights reserved.</>,
    },
    block2: {
        heading: "Company",
        items: [
            { text: "About Us", link: "/about" },
            { text: "How It Works", link: "/how-it-works" },
            { text: "Blogs", link: "/blogs" }
        ]
    },
    block3: {
        heading: "Further information",
        items: [{ text: "Terms of Services", link: "/terms-of-services" }, { text: "Privacy Policy", link: "/privacy-policy" }]
    },
    block4: {
        heading: "Community",
        images: [
            { imagePath: facebook, altText: "facebook", link: "https://www.facebook.com/niroggyan/" },
            { imagePath: linkedin, altText: "linkedin", link: "https://www.linkedin.com/company/niroggyan/mycompany/" },
            { imagePath: instagram, altText: "instagram", link: "https://www.instagram.com/niroggyan_reports" }
        ],

    }
};

export default footer;