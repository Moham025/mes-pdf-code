document.addEventListener('DOMContentLoaded', function() {
    // Initialize timeline
    const timeline = document.querySelector('.timeline');
    const timelineData = [
        { title: "Pages Liminaires", icon: "fa-file-alt" },
        { title: "Introduction", icon: "fa-play" },
        { title: "Cadre & Problématique", icon: "fa-landmark" },
        { title: "État de l'Art", icon: "fa-microscope" },
        { title: "Méthodologie", icon: "fa-cogs" },
        { title: "Analyse & Dimensionnement", icon: "fa-calculator" },
        { title: "Solution & Protocole", icon: "fa-clipboard-check" },
        { title: "Conclusion", icon: "fa-flag-checkered" },
        { title: "Bibliographie & Annexes", icon: "fa-book" }
    ];

    // Add timeline items
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-marker">
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="timeline-content">
                <h4>${item.title}</h4>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });

    // Initialize chapters
    const chaptersSection = document.querySelector('.chapters-section');
    const chaptersData = [
        {
            number: 'III',
            title: 'Cadre de l\'Étude et Problématique',
            content: [
                'Contexte institutionnel',
                'Description du projet architectural',
                'Analyse géotechnique détaillée',
                'Identification des risques'
            ]
        },
        {
            number: 'IV',
            title: 'État de l\'Art et Cadre Théorique',
            content: [
                'Fondamentaux des fondations',
                'Solutions pour sols faibles',
                'Réglementation et normes',
                'Innovations récentes'
            ]
        },
        {
            number: 'V',
            title: 'Méthodologie de l\'Étude',
            content: [
                'Scénarios d\'étude',
                'Approche de dimensionnement',
                'Critères d\'évaluation',
                'Méthode de comparaison'
            ]
        }
    ];

    // Add chapter items
    chaptersData.forEach(chapter => {
        const chapterElement = document.createElement('div');
        chapterElement.className = 'chapter';
        chapterElement.id = chapter.title.toLowerCase().replace(/\s+/g, '-');
        
        let contentHTML = '';
        chapter.content.forEach(item => {
            contentHTML += `<li><i class="fas fa-arrow-right"></i> ${item}</li>`;
        });

        chapterElement.innerHTML = `
            <div class="chapter-header">
                <span class="chapter-number">${chapter.number}</span>
                <h4>${chapter.title}</h4>
            </div>
            <ul class="chapter-content">
                ${contentHTML}
            </ul>
        `;
        
        chaptersSection.appendChild(chapterElement);
    });

    // Add animation to elements
    const animateElements = () => {
        const elements = document.querySelectorAll('.timeline-item, .chapter, .step');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    animateElements();
});