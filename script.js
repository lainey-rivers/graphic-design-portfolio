/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(
    ".project-card, .skill, .about-text, .section-heading, .contact-section"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* MOUSE GLOW */

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    if (cursorGlow) {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }

});


/* PORTFOLIO FILTERS */

const filterButtons =
    document.querySelectorAll(".filter-button");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        projectCards.forEach((project) => {

            const category =
                project.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                project.style.display = "block";

                setTimeout(() => {

                    project.style.opacity = "1";
                    project.style.transform =
                        "scale(1)";

                }, 50);

            } else {

                project.style.opacity = "0";
                project.style.transform =
                    "scale(0.9)";

                setTimeout(() => {

                    project.style.display = "none";

                }, 300);

            }

        });

    });

});


/* CATEGORY DATA */

const categories = {

    branding: {

        title: "Branding",

        description:
            "A collection of visual identities, brand systems, logos, and creative direction projects.",

        projects: [

            {
                id: "brand-identity",
                title: "Brand Identity",
                image: "images/project-1.jpg",
                images: [
                  "images/project-1.jpg",
                  "images/project-1-2.jpg",
                  "images/project-1-3.jpg",
                  "images/project-1-4.jpg"
                ],
                category: "Branding",
                year: "2026",
                tools: "Adobe Illustrator • Photoshop • Figma",

                description:
                    "A complete visual identity focused on creating a memorable and flexible brand system.",

                challenge:
                    "The goal was to create a visual identity that felt modern, recognizable, and adaptable across digital and print applications.",

                process:
                    "I explored typography, color systems, composition, and visual direction before developing the final identity.",

                result:
                    "The final identity created a cohesive visual language that could be used consistently across multiple platforms."
            },

            {
                id: "visual-identity",
                title: "Visual Identity",
                image: "images/project-1.jpg",
                category: "Branding",
                year: "2026",
                tools: "Adobe Illustrator • Photoshop",

                description:
                    "A visual identity exploration focused on typography, color, and brand personality.",

                challenge:
                    "Create a visual system that could communicate personality while remaining professional.",

                process:
                    "I experimented with typography, color combinations, layouts, and graphic elements.",

                result:
                    "The final concept established a strong and recognizable visual direction."
            },

            {
                id: "logo-design",
                title: "Logo Design",
                image: "images/project-1.jpg",
                category: "Branding",
                year: "2026",
                tools: "Adobe Illustrator",

                description:
                    "A logo design project focused on creating a simple but memorable visual mark.",

                challenge:
                    "Create a logo that could remain recognizable at different sizes.",

                process:
                    "I developed multiple concepts and refined the strongest direction through typography and shape exploration.",

                result:
                    "A clean, scalable logo system suitable for both digital and print applications."
            }

        ]

    },


    web: {

        title: "Web Design",

        description:
            "Digital experiences, websites, landing pages, and interface design.",

        projects: [

            {
                id: "digital-experience",
                title: "Digital Experience",
                image: "images/project-2.jpg",
                category: "Web Design",
                year: "2026",
                tools: "HTML • CSS • JavaScript • Figma",

                description:
                    "A modern digital experience combining visual design with front-end development.",

                challenge:
                    "Create a website that felt visually engaging while remaining easy to navigate.",

                process:
                    "I developed the visual direction, layout, typography, responsive structure, and interactive elements.",

                result:
                    "A responsive digital experience that combines design and front-end development."
            },

            {
                id: "website-concept",
                title: "Website Concept",
                image: "images/project-2.jpg",
                category: "Web Design",
                year: "2026",
                tools: "Figma • HTML • CSS",

                description:
                    "A website concept focused on clean layouts and strong visual hierarchy.",

                challenge:
                    "Create an engaging interface without overwhelming the user.",

                process:
                    "I focused on spacing, typography, visual hierarchy, and responsive layouts.",

                result:
                    "A clean and modern interface designed around usability."
            }

        ]

    },


    social: {

        title: "Social Media",

        description:
            "Social campaigns, promotional graphics, and digital content created for online audiences.",

        projects: [

            {
                id: "social-campaign",
                title: "Social Campaign",
                image: "images/project-3.jpg",
                category: "Social Media",
                year: "2026",
                tools: "Photoshop • Illustrator • Canva",

                description:
                    "A social media campaign designed to create a consistent and recognizable visual presence.",

                challenge:
                    "Create content that would immediately capture attention while maintaining brand consistency.",

                process:
                    "I created a visual system using consistent typography, color, layouts, and graphic elements.",

                result:
                    "A cohesive social media campaign with a recognizable visual identity."
            },

            {
                id: "social-graphics",
                title: "Social Graphics",
                image: "images/project-3.jpg",
                category: "Social Media",
                year: "2026",
                tools: "Photoshop • Canva",

                description:
                    "A collection of digital graphics designed for social platforms.",

                challenge:
                    "Create visually engaging content that communicates information quickly.",

                process:
                    "I experimented with layouts, typography, imagery, and visual hierarchy.",

                result:
                    "A collection of polished graphics optimized for digital audiences."
            }

        ]

    },


    creative: {

        title: "Creative",

        description:
            "Experimental artwork, digital art, illustration, and creative concepts.",

        projects: [

            {
                id: "visual-concept",
                title: "Visual Concept",
                image: "images/project-4.jpg",
                category: "Creative",
                year: "2026",
                tools: "Photoshop • Illustrator",

                description:
                    "An experimental visual project exploring composition, color, and digital artwork.",

                challenge:
                    "Explore a visual idea without being restricted by traditional design systems.",

                process:
                    "I experimented with composition, color, typography, lighting, and digital effects.",

                result:
                    "A visually expressive concept combining multiple creative techniques."
            },

            {
                id: "creative-direction",
                title: "Creative Direction",
                image: "images/project-4.jpg",
                category: "Creative",
                year: "2026",
                tools: "Photoshop • Illustrator",

                description:
                    "A creative direction project focused on developing a distinct visual aesthetic.",

                challenge:
                    "Establish a consistent visual language across multiple creative elements.",

                process:
                    "I developed the mood, visual references, typography, color direction, and composition.",

                result:
                    "A cohesive creative direction that establishes a strong visual personality."
            }

        ]

    }

};


/* CATEGORY GALLERY */

const categoryGallery =
    document.querySelector("#categoryGallery");

const categoryGrid =
    document.querySelector("#categoryGrid");

const categoryTitle =
    document.querySelector("#categoryTitle");

const categoryEyebrow =
    document.querySelector("#categoryEyebrow");

const categoryDescription =
    document.querySelector("#categoryDescription");

const categoryBack =
    document.querySelector("#categoryBack");


function openCategory(category) {

  console.log(
    "OPEN CATEGORY:",
    category
  )

    const categoryData =
        categories[category];

    if (!categoryData) return;


    categoryTitle.textContent =
        categoryData.title;

    categoryEyebrow.textContent =
        `${categoryData.title.toUpperCase()} • SELECTED WORK`;

    categoryDescription.textContent =
        categoryData.description;


    categoryGrid.innerHTML = "";

categoryData.projects.forEach((project) => {

    const projectElement =
        document.createElement("article");

    projectElement.classList.add(
        "gallery-project"
    );

    projectElement.setAttribute(
        "role",
        "button"
    );

    projectElement.setAttribute(
        "tabindex",
        "0"
    );


    projectElement.innerHTML = `

        <div class="gallery-project-image">

            <img
                src="${project.image}"
                alt="${project.title}"
            >

        </div>


        <div class="gallery-project-info">

            <div>

                <p>
                    ${categoryData.title.toUpperCase()}
                </p>

                <h3>
                    ${project.title}
                </h3>

            </div>


            <span class="gallery-project-arrow">
                ↗
            </span>

        </div>

    `;


    /* CLICK */

    projectElement.onclick = function () {

        console.log(
            "PROJECT CLICKED:",
            project.title
        );

        openProject(project);

    };


    /* KEYBOARD */

    projectElement.onkeydown = function (event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openProject(project);

        }

    };


    categoryGrid.appendChild(
        projectElement
    );

});

    categoryGallery.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


/* CONNECT ORIGINAL PROJECTS */

projectCards.forEach((project) => {

    project.onclick = function () {

        const category =
            project.getAttribute("data-category");

        console.log(
            "CATEGORY CLICKED:",
            category
        );

        openCategory(category);

    };

});


/* PROJECT CASE STUDY */

const projectCaseStudy =
    document.querySelector("#projectCaseStudy");

const caseStudyImage =
    document.querySelector("#caseStudyImage");

const caseStudyCategory =
    document.querySelector("#caseStudyCategory");

const caseStudyTitle =
    document.querySelector("#caseStudyTitle");

const caseStudyDescription =
    document.querySelector("#caseStudyDescription");

const caseStudyYear =
    document.querySelector("#caseStudyYear");

const caseStudyTools =
    document.querySelector("#caseStudyTools");

const caseStudyChallenge =
    document.querySelector("#caseStudyChallenge");

const caseStudyProcess =
    document.querySelector("#caseStudyProcess");

const caseStudyResult =
    document.querySelector("#caseStudyResult");

const caseStudyGallery =
    document.querySelector("#caseStudyGallery");

const caseStudyBack =
    document.querySelector("#caseStudyBack");

const caseStudyBackBottom =
    document.querySelector("#caseStudyBackBottom");


function openProject(project) {

  console.log("OPENING PROJECT:", project);

    caseStudyImage.src =
        project.image;

    caseStudyImage.alt =
        project.title;

    caseStudyCategory.textContent =
        project.category.toUpperCase();

    caseStudyTitle.textContent =
        project.title;

    caseStudyDescription.textContent =
        project.description;

    caseStudyYear.textContent =
        project.year;

    caseStudyTools.textContent =
        project.tools;

    caseStudyChallenge.textContent =
        project.challenge;

    caseStudyProcess.textContent =
        project.process;

    caseStudyResult.textContent =
        project.result;

     /* Build project gallery */

caseStudyGallery.innerHTML = "";

const galleryImages =
    project.images || [project.image];


galleryImages.forEach((image, index) => {

    const galleryItem =
        document.createElement("div");

    galleryItem.className =
        "case-study-gallery-item";


    galleryItem.innerHTML = `

        <img
            src="${image}"
            alt="${project.title} — image ${index + 1}"
        >

    `;

     galleryItem.addEventListener(
        "click",
        () => {

            openLightbox(
                galleryImages,
                index
            );

        }
    );

    caseStudyGallery.appendChild(
        galleryItem
    );

});

    projectCaseStudy.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


/* CLOSE CASE STUDY */

function closeProject() {

    projectCaseStudy.classList.remove(
        "active"
    );

    document.body.style.overflow = "";

}


caseStudyBack.addEventListener(
    "click",
    closeProject
);


caseStudyBackBottom.addEventListener(
    "click",
    closeProject
);


/* CLOSE CATEGORY */

categoryBack.addEventListener(
    "click",
    () => {

        categoryGallery.classList.remove(
            "active"
        );

        document.body.style.overflow = "";

    }
);


/* ESCAPE KEY */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Escape") return;


        if (
            projectCaseStudy &&
            projectCaseStudy.classList.contains("active")
        ) {

            closeProject();

            return;

        }


        if (
            categoryGallery &&
            categoryGallery.classList.contains("active")
        ) {

            categoryGallery.classList.remove(
                "active"
            );

            document.body.style.overflow = "";

        }

    }
);

/* IMAGE LIGHTBOX */

const imageLightbox =
    document.querySelector("#imageLightbox");

const lightboxImage =
    document.querySelector("#lightboxImage");

const lightboxClose =
    document.querySelector("#lightboxClose");

const lightboxPrev =
    document.querySelector("#lightboxPrev");

const lightboxNext =
    document.querySelector("#lightboxNext");

const lightboxCounter =
    document.querySelector("#lightboxCounter");


let currentGalleryImages = [];

let currentImageIndex = 0;


/* OPEN LIGHTBOX */

function openLightbox(images, index) {

    currentGalleryImages =
        images;

    currentImageIndex =
        index;


    updateLightbox();


    imageLightbox.classList.add(
        "active"
    );

}


/* UPDATE IMAGE */

function updateLightbox() {

    const image =
        currentGalleryImages[
            currentImageIndex
        ];


    if (!image) return;


    lightboxImage.src =
        image;


    lightboxCounter.textContent =
        `${String(currentImageIndex + 1).padStart(2, "0")} / ${String(currentGalleryImages.length).padStart(2, "0")}`;

}


/* NEXT IMAGE */

function nextImage() {

    if (
        currentGalleryImages.length === 0
    ) return;


    currentImageIndex++;

    if (
        currentImageIndex >=
        currentGalleryImages.length
    ) {

        currentImageIndex = 0;

    }


    updateLightbox();

}


/* PREVIOUS IMAGE */

function previousImage() {

    if (
        currentGalleryImages.length === 0
    ) return;


    currentImageIndex--;

    if (
        currentImageIndex < 0
    ) {

        currentImageIndex =
            currentGalleryImages.length - 1;

    }


    updateLightbox();

}


/* CLOSE */

function closeLightbox() {

    imageLightbox.classList.remove(
        "active"
    );

}


/* BUTTONS */

lightboxNext.addEventListener(
    "click",
    nextImage
);


lightboxPrev.addEventListener(
    "click",
    previousImage
);


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


/* CLICK OUTSIDE IMAGE */

imageLightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            imageLightbox
        ) {

            closeLightbox();

        }

    }
);


/* KEYBOARD */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !imageLightbox.classList.contains(
                "active"
            )
        ) return;


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowRight") {

            nextImage();

        }


        if (event.key === "ArrowLeft") {

            previousImage();

        }

    }
);

/* COPY EMAIL */

const copyEmail =
    document.querySelector("#copyEmail");


if (copyEmail) {

    copyEmail.addEventListener(
        "click",
        async () => {

            const email =
                copyEmail.dataset.email;


            try {

                await navigator.clipboard.writeText(
                    email
                );


                copyEmail.innerHTML = `
                    <span>
                        EMAIL COPIED
                    </span>

                    <span>
                        ✓
                    </span>
                `;


                setTimeout(() => {

                    copyEmail.innerHTML = `
                        <span>
                            COPY EMAIL
                        </span>

                        <span>
                            ⧉
                        </span>
                    `;

                }, 2000);


            } catch (error) {

                console.log(
                    "Could not copy email."
                );

            }

        }
    );

}

/* BACK TO TOP */

const backToTop =
    document.querySelector("#backToTop");


if (backToTop) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 600) {

                backToTop.classList.add(
                    "visible"
                );

            } else {

                backToTop.classList.remove(
                    "visible"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}