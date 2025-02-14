

  {/* <img src="https://iitu.edu.kz/media/images/dostizheniia.max-165x165_HnXfbIM.original.png" alt="" /> */}

import './About.css';

const About = () => {
    return (
        <div className="about-container" id='about'>
            <div>
                <h1>International Information Technology University</h1>
                <p>
                    МУИТ — ведущий IT-вуз Казахстана, ориентированный на инновации, технологии и академическое превосходство.
                </p>
                <p><strong>IITU — твой путь в мир технологий!</strong></p>
            </div>

            <img 
                src="https://academy.kz/media/k2/items/cache/5dd4b7e13497b1cdfc3b17b4ca3927aa_XL.jpg?t=20210521_040632" 
                alt="IITU Building"
            />
        </div>
    );
}

export default About;
