import logoIcon from "../footer/static/imgs/logo-icon.svg"
import facebook from "../footer/static/imgs/facebook.svg"
import instagram from "../footer/static/imgs/instagram.svg"
import linkedin from "../footer/static/imgs/linkedin.svg"

export default (
    function () {
        return {
            Footer: {
                block1: {
                    logoImage: logoIcon,
                    copyrightText: <>Copyright 2020 © NirogGyan<br />All rights reserved.</>,
                },
                block2: {
                    heading: "Company",
                    items: ["About us", "How it works", "Blog"]
                },
                block3: {
                    heading: "Further information",
                    items: ["Terms of Services", "Privacy Policy"]
                },
                block4: {
                    heading: "Community",
                    svgitems: {
                        facebook : [facebook, "https://www.facebook.com/niroggyan/"],
                        linkedin : [linkedin, "https://www.linkedin.com/company/niroggyan/mycompany/"],
                        instagram: [instagram, "https://www.instagram.com/niroggyan_reports"]
                    },
                    
                }
            }
        }
    })();