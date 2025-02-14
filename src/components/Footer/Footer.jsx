import React from "react";
import "./Footer.css"; // Подключаем обычный CSS
import Insta from "../../assets/icons/socials/Insta";
import Facebook from "../../assets/icons/socials/Facebook";
import Twitter from "../../assets/icons/socials/Twitter";
import Instagram from "../../assets/icons/socials/Instagram";

const contactInfo = [
    { text: "IITU University", isLogo: true },
    { text: "+7(999)-999-99-99", url: "#", className: "link_title" },
    { text: "reception@iitu.edu.kz", url: "#", style: { textDecoration: "underline" } },
    { text: "г.Алматы, ул. Манаса 34/1", url: "#", style: { maxWidth: "344px" } }
];

const socialIcons = [Insta, Facebook, Twitter, Instagram].map((Icon, i) => (
    <a key={i} href="#">
        <Icon />
    </a>
));

const navigationSections = [
    { title: "Company", links: ["About Us", "Course Info", "Course Enrollment", "Faculty"] }
];

export const Footer = () => (
    <footer className="mainFooterContainer">
        <div className="footer_container">
            <div className="link_container">
                {contactInfo.map(({ text, url, className, style, isLogo }, i) =>
                    isLogo ? (
                        <h1 key={i} className="footer_logo">{text}</h1>
                    ) : (
                        <a key={i} href={url} className={className} style={style}>
                            {text}
                        </a>
                    )
                )}
                <div className="social_icons">{socialIcons}</div>
            </div>
            <div className="navigation_columns">
                {navigationSections.map(({ title, links }, i) => (
                    <div key={i} className="navigation_section">
                        <span className="link_title">{title}</span>
                        {links.map((link, j) => (
                            <a key={j} href="#">
                                {link}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        <div className="footer_copyright_container">
            <div className="footerBottomLine"></div>
            <span className="footer_copyright">
                © 2024 Company. All rights reserved.
            </span>
        </div>
    </footer>
);
