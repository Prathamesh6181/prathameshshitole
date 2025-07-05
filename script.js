// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll functionality to scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    scrollIndicator.addEventListener('click', function() {
        // Smooth scroll to about section
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Add hover effect to scroll indicator
    scrollIndicator.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(-50%) scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    scrollIndicator.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(-50%) scale(1)';
    });

    // Add click functionality to design cards
    const designCards = document.querySelectorAll('.design-card');
    designCards.forEach(card => {
        card.addEventListener('click', function() {
            const cardId = this.id;
            
            // Add click animation
            this.style.transform = 'translateY(-10px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }, 150);
            
            // Navigate to respective portfolio sections
            if (cardId === 'graphic-design') {
                // Scroll to graphic design section
                const graphicDesignSection = document.getElementById('graphic-design-section');
                graphicDesignSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (cardId === '3d-animation') {
                // Scroll to 3D design section
                const threeDDesignSection = document.getElementById('3d-design-section');
                threeDDesignSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Gallery data for different categories
    const galleryData = {
        'poster-design': [
            { src: 'poster/Burger Poster Design 1.jpg', title: 'Social Media Post' },
            { src: 'poster/Janmashtami Poster Image.jpg', title: 'Social Media Post' },
            { src: 'poster/Poster Design.jpg', title: 'Social Media Post' },
            { src: 'poster/Pasta.jpg', title: 'Social Media Post' },
            { src: 'poster/overtime main poster.jpg', title: 'Short Film Poster' },
            { src: 'poster/Snake_Manipulation image.png', title: 'Image Manipulation' },
            { src: 'poster/1.jpg', title: 'Political Poster' },
            { src: 'poster/DIGITAL PAINTING.png', title: 'Digital Painting' },
            { src: 'poster/Construction template.jpg', title: 'Construction Template' },
            { src: 'poster/ice-cream template.jpg', title: 'Ice Cream Template' },
           { src: 'poster/IMG-20240719-WA0007.jpg', title: 'Background Design' },
            
        ],
        'logos-branding': [
            { src: 'Logos/1.jpg', title: 'Modern Tech Logo' },
            { src: 'Logos/3.jpg', title: 'Elegant Business Logo' },
            { src: 'Logos/2.jpg', title: 'Creative Agency Logo' },
            { src: 'Logos/4.jpg', title: 'Minimalist Design Logo' },
            { src: 'Logos/5.jpg', title: 'Bold Brand Identity' },   
            { src: 'Logos/6.jpg', title: 'Professional Corporate Logo' },
            { src: 'Logos/7.jpg', title: 'Dynamic Sports Logo' },
            { src: 'Logos/8.jpg', title: 'Luxury Brand Logo' },
            { src: 'Logos/Visiting Card.jpg', title: 'Business Card Design' },
            { src: 'Logos/Eco life Logo Design.jpg', title: 'Eco-Friendly Brand Logo' },
            { src: 'Logos/LOMG Logo 2-01.jpg', title: 'Restaurant Logo Design' },
        ],
        'illustration': [
            // Local images from 'illustrations/' folder
            { src: 'Illustrations/illustration1.jpg', title: 'Digital Character Illustration' },
            { src: 'Illustrations/illustration2.jpg', title: 'Book Cover Illustration' },
            { src: 'Illustrations/illustration3.jpg', title: 'Editorial Illustration' },
            { src: 'Illustrations/illustration4.jpg', title: 'Concept Art Illustration' }, 
            { src: 'Illustrations/illustration5.jpg', title: 'Children\'s Book Illustration' }, 
            { src: 'Illustrations/illustration6.jpg', title: 'Fantasy World Illustration' }
        ],
        'packaging-design': [
            // Local images from 'packaging/' folder - arranged attractively
            { src: 'packaging/Front.jpg', title: 'Food Packaging Design - Front View' },
            { src: 'packaging/banners.png', title: 'Food Packaging Design - Side View 1' },
            // PDF Case Study with preview
            { src: 'packaging/Patilkaki Box Packaging Design.pdf', title: 'Patilkaki Box Packaging Design', type: 'pdf-preview' },
            // Product Design Sub-header
            { type: 'sub-header', title: 'Product Design' },
            // Product Design Images
            { src: 'Product design/1.jpg', title: 'Product Design - Warp Tool' },
            { src: 'Product design/2.jpg', title: 'Product Design - Concept 1' },
            { src: 'Product design/3.jpg', title: 'Product Design - Concept 2' },
            { src: 'Product design/4.jpg', title: 'Product Design - Concept 2' },
            { src: 'Product design/5.jpg', title: 'Product Design - Concept 2' },
       
        ],
        // 3D Design categories with justified layout
        '3d-product-viz': [
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop', title: 'Product Renders' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop', title: 'Architectural Visualization' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=700&fit=crop', title: 'Automotive Design' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=550&fit=crop', title: 'Furniture Design' },
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=650&fit=crop', title: 'Electronics Visualization' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=580&fit=crop', title: 'Industrial Design' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop', title: 'Medical Device Renders' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop', title: 'Consumer Products' }
        ],
        '3d-motion-graphics': [
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop', title: 'Character Animation' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop', title: 'Motion Graphics' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=700&fit=crop', title: 'Particle Effects' },
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=550&fit=crop', title: 'Logo Animation' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=650&fit=crop', title: 'Title Sequences' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=580&fit=crop', title: 'Visual Effects' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop', title: '3D Typography' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop', title: 'Kinetic Typography' }
        ],
        '3d-abstract-environments': [
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop', title: 'Abstract Compositions' },
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=500&fit=crop', title: 'Surreal Environments' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=700&fit=crop', title: 'Concept Art' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=550&fit=crop', title: 'Digital Landscapes' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=650&fit=crop', title: 'Experimental Spaces' },
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=580&fit=crop', title: 'Futuristic Worlds' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop', title: 'Organic Forms' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop', title: 'Geometric Abstractions' }
        ],
        '3d-architectural-viz': [
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop', title: 'Exterior Renders' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop', title: 'Interior Design' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=700&fit=crop', title: 'Urban Planning' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=550&fit=crop', title: 'Residential Projects' },
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=650&fit=crop', title: 'Commercial Spaces' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=580&fit=crop', title: 'Landscape Design' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop', title: 'Night Renders' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop', title: 'Aerial Views' }
        ],
        'character-modeling': [
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop', title: 'Fantasy Character Model' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop', title: 'Human Character Design' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=700&fit=crop', title: 'Creature Character Model' },
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=550&fit=crop', title: 'Cartoon Character Design' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=650&fit=crop', title: 'Sci-Fi Character Model' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=580&fit=crop', title: 'Historical Character Design' }
        ],
        'environment-modeling': [
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', title: 'Fantasy Environment' },
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=450&fit=crop', title: 'Urban Cityscape' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=380&fit=crop', title: 'Natural Landscape' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=420&fit=crop', title: 'Interior Design Scene' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=460&fit=crop', title: 'Sci-Fi Environment' },
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=390&fit=crop', title: 'Underwater Scene' }
        ],
        'product-visualization': [
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop', title: 'Product Renders' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop', title: 'Architectural Visualization' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=700&fit=crop', title: 'Automotive Design' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=550&fit=crop', title: 'Furniture Design' },
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=650&fit=crop', title: 'Electronics Visualization' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=580&fit=crop', title: 'Industrial Design' }
        ],
        'animation-rigging': [
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop', title: 'Character Animation' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=450&fit=crop', title: 'Rigging Setup' },
            { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=380&fit=crop', title: 'Walk Cycle Animation' },
            { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=420&fit=crop', title: 'Facial Animation' },
            { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=460&fit=crop', title: 'Action Sequence' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=390&fit=crop', title: 'Particle Effects' }
        ]
    };

    // Gallery overlay elements
    const galleryOverlay = document.getElementById('gallery-overlay');
    const galleryTitle = document.getElementById('gallery-title');
    const galleryContent = document.getElementById('gallery-content');
    const galleryClose = document.getElementById('gallery-close');

    // Showcase cards
    const showcaseCards = document.querySelectorAll('.showcase-card');

    // Add click event to showcase cards
    showcaseCards.forEach(card => {
        const viewGalleryBtn = card.querySelector('.view-gallery-btn');
        const galleryType = card.getAttribute('data-gallery');

        // Click on the entire card or the button
        [card, viewGalleryBtn].forEach(element => {
            if (element) {
                element.addEventListener('click', function(e) {
                    e.stopPropagation();
                    
                    // Add click animation to button if clicked directly
                    if (element === viewGalleryBtn) {
                        element.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            element.style.transform = 'scale(1)';
                        }, 150);
                    }
                    
                    openGallery(galleryType);
                });
            }
        });
    });

    // Enhanced button interactions
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.view-gallery-btn');
        
        buttons.forEach(button => {
            // Add ripple effect on click
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    });

    // Function to open gallery
    function openGallery(category) {
        const overlay = document.querySelector('.gallery-overlay');
        const content = document.querySelector('.gallery-content');
        const title = document.querySelector('.gallery-title');
        
        // Set gallery title based on category
        const categoryTitles = {
            'poster-design': 'Poster Design Gallery',
            'logos-branding': 'Logos & Branding Gallery',
            'illustration': 'Illustration Gallery',
            'packaging-design': 'Packaging Design Gallery',
            '3d-product-viz': 'Product Visualization Gallery',
            '3d-motion-graphics': 'Motion Graphics Gallery',
            '3d-abstract-environments': 'Abstract & Environments Gallery',
            '3d-architectural-viz': 'Architectural Visualization Gallery',
            'character-modeling': 'Character Modeling Gallery',
            'environment-modeling': 'Environment Modeling Gallery',
            'product-visualization': 'Product Visualization Gallery',
            'animation-rigging': 'Animation & Rigging Gallery'
        };
        
        title.textContent = categoryTitles[category] || 'Gallery';
        
        // Clear existing content and set category
        content.innerHTML = '';
        content.setAttribute('data-category', category);
        
        // Use masonry gallery layout for all categories
        createMasonryGallery(content, category);
        
        // Show overlay
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Ensure close button is properly attached
        setupCloseButton();
        
        // Add keyboard support
        document.addEventListener('keydown', handleGalleryKeydown);
        showModalCloseBtn(closeGallery);
    }

    // Function to setup close button functionality
    function setupCloseButton() {
        const closeBtn = document.querySelector('.gallery-close');
        if (closeBtn) {
            // Remove existing event listeners to prevent duplicates
            closeBtn.removeEventListener('click', closeGallery);
            // Add new event listener
            closeBtn.addEventListener('click', closeGallery);
        }
    }

    // Function to create masonry gallery layout (used for all categories)
    function createMasonryGallery(container, category) {
        console.log('Creating gallery for category:', category);
        console.log('Gallery data:', galleryData[category]);
        
        // Clear existing content
        container.innerHTML = '';
        
        // Set data attribute for packaging design specific styling
        if (category === 'packaging-design') {
            container.setAttribute('data-category', 'packaging-design');
            console.log('Set packaging-design data attribute');
        }

        // Get gallery data for the category
        const items = galleryData[category];
        
        if (!items) {
            console.error('No gallery data found for category:', category);
            return;
        }

        items.forEach((item, index) => {
            console.log('Processing item:', index, item);
            
            if (item.type === 'pdf-preview') {
                // Create PDF preview item
                const pdfItem = document.createElement('div');
                pdfItem.className = 'pdf-preview-item';
                pdfItem.innerHTML = `
                    <div class="pdf-thumbnail" onclick="openPDFModal('${item.src}', '${item.title}')">
                        <div class="pdf-preview-content">
                            <i class="fas fa-file-pdf pdf-icon-large"></i>
                            <h3 class="pdf-preview-title">${item.title}</h3>
                            <p class="pdf-preview-label">Click to view PDF</p>
                        </div>
                    </div>
                `;
                container.appendChild(pdfItem);
                console.log('Added PDF preview item');
            } else if (item.type === 'sub-header') {
                // Create sub-header
                const subHeader = document.createElement('div');
                subHeader.className = 'gallery-sub-header';
                subHeader.innerHTML = `
                    <h3 class="sub-header-title">${item.title}</h3>
                `;
                container.appendChild(subHeader);
                console.log('Added sub-header:', item.title);
            } else {
                // Create regular image item
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                
                // Add inline styles for packaging design
                
                // Add click functionality to all gallery items (except PDF items)
                if (item.type !== 'pdf-preview') {
                    galleryItem.style.cursor = 'pointer';
                    galleryItem.addEventListener('click', function() {
                        openImageModal(item.src, item.title || 'Gallery Image');
                    });
                    
                    // Add hover effect for all gallery items
                    galleryItem.addEventListener('mouseenter', function() {
                        this.style.transform = 'translateY(-3px) scale(1.02)';
                        this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                        this.style.transition = 'all 0.3s ease';
                    });
                    
                    galleryItem.addEventListener('mouseleave', function() {
                        this.style.transform = 'translateY(0) scale(1)';
                        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                    });
                }
                
                // Add special styling for logos gallery
                if (category === 'logos-branding') {
                    console.log('Adding logo gallery styles for item:', index);
                    galleryItem.style.cssText += `
                        background: #ffffff !important;
                        border: 2px solid #f0f0f0 !important;
                        border-radius: 12px !important;
                        padding: 20px !important;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
                        transition: all 0.3s ease !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        min-height: 200px !important;
                        cursor: pointer !important;
                    `;
                    
                    // Override hover effect for logos with purple accent
                    galleryItem.addEventListener('mouseenter', function() {
                        this.style.transform = 'translateY(-5px) scale(1.02)';
                        this.style.boxShadow = '0 8px 30px rgba(147, 51, 234, 0.2)';
                        this.style.borderColor = '#9333ea';
                    });
                    
                    galleryItem.addEventListener('mouseleave', function() {
                        this.style.transform = 'translateY(0) scale(1)';
                        this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                        this.style.borderColor = '#f0f0f0';
                    });
                }
                
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.title || 'Gallery Image';
                img.loading = 'lazy';
                
                if (item.title) {
                    const label = document.createElement('div');
                    label.className = 'gallery-item-label';
                    label.textContent = item.title;
                    galleryItem.appendChild(label);
                }
                
                galleryItem.appendChild(img);
                container.appendChild(galleryItem);
                console.log('Added image item:', item.src);
            }
        });
        
        console.log('Gallery creation complete. Container children:', container.children.length);
    }

    function closeGallery() {
        const overlay = document.querySelector('.gallery-overlay');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleGalleryKeydown);
        hideModalCloseBtn();
    }

    function handleGalleryKeydown(e) {
        if (e.key === 'Escape') {
            closeGallery();
        }
    }

    // Close gallery when clicking outside content
    document.addEventListener('DOMContentLoaded', function() {
        const overlay = document.querySelector('.gallery-overlay');
        
        // Use event delegation for overlay click
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeGallery();
            }
        });
        
        // Use event delegation for close button (more reliable)
        document.addEventListener('click', function(e) {
            if (e.target.closest('.gallery-close')) {
                closeGallery();
            }
        });
        
        // Initial setup of close button
        setupCloseButton();
        
        // Add touch support for mobile
        let touchStartY = 0;
        let touchEndY = 0;
        
        overlay.addEventListener('touchstart', function(e) {
            touchStartY = e.changedTouches[0].screenY;
        });
        
        overlay.addEventListener('touchend', function(e) {
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartY - touchEndY;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe up - could be used for next image
                } else {
                    // Swipe down - close gallery
                    closeGallery();
                }
            }
        }
    });

    // Add parallax effect to background circle on mouse move
    document.addEventListener('mousemove', function(e) {
        const circle = document.querySelector('.hero-bg-circle');
        if (circle) {
            const x = (window.innerWidth - e.clientX) / 100;
            const y = (window.innerHeight - e.clientY) / 100;
            
            circle.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }
    });

    // Enhanced intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                
                // Add specific animations for different elements
                if (entry.target.classList.contains('section-title')) {
                    entry.target.style.transform = 'translateY(0)';
                } else if (entry.target.classList.contains('about-text')) {
                    entry.target.style.transform = 'translateX(0)';
                } else if (entry.target.classList.contains('skills-grid')) {
                    entry.target.style.transform = 'translateX(0)';
                } else if (entry.target.classList.contains('design-card')) {
                    entry.target.style.transform = 'translateY(0)';
                } else if (entry.target.classList.contains('showcase-card')) {
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.hero-content, .scroll-indicator, .section-title, .about-text, .skills-grid, .design-card, .showcase-card, .graphic-design');
    animatedElements.forEach(el => observer.observe(el));

    // Add staggered animation for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.3s ease ${0.3 + (index * 0.05)}s`;
        
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        skillObserver.observe(item);
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === ' ') {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            aboutSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Performance optimization: Throttle mouse move events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply throttling to mouse move
    const throttledMouseMove = throttle(function(e) {
        const circle = document.querySelector('.hero-bg-circle');
        if (circle) {
            const x = (window.innerWidth - e.clientX) / 100;
            const y = (window.innerHeight - e.clientY) / 100;
            
            circle.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }
    }, 16);

    document.addEventListener('mousemove', throttledMouseMove);

    // Add smooth scroll behavior for all internal links
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            console.warn('Image failed to load:', this.src);
        });
    });

    // Copy email functionality
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyFeedback = document.getElementById('copy-feedback');
    const emailAddress = 'hello@yourportfolio.com';

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async function() {
            try {
                await navigator.clipboard.writeText(emailAddress);
                
                // Show feedback
                copyFeedback.classList.add('show');
                
                // Change button icon temporarily
                const icon = this.querySelector('i');
                icon.className = 'fas fa-check';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    copyFeedback.classList.remove('show');
                    icon.className = 'fas fa-copy';
                }, 2000);
                
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = emailAddress;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Show feedback
                copyFeedback.classList.add('show');
                
                // Change button icon temporarily
                const icon = this.querySelector('i');
                icon.className = 'fas fa-check';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    copyFeedback.classList.remove('show');
                    icon.className = 'fas fa-copy';
                }, 2000);
            }
        });
    }

    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('.nav-link');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for navigation links
    const allNavLinks = document.querySelectorAll('.nav-link, .nav-cta');
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to open PDF viewer
    function openPDFViewer(pdfSrc, title) {
        const overlay = document.createElement('div');
        overlay.className = 'pdf-overlay';
        overlay.innerHTML = `
            <div class="pdf-container">
                <div class="pdf-header">
                    <h3>${title}</h3>
                    <button class="pdf-close" onclick="this.parentElement.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <iframe src="${pdfSrc}" width="100%" height="600px"></iframe>
            </div>
        `;
        
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
    }

    // Function to open PDF modal with iframe
    function openPDFModal(pdfSrc, title) {
        console.log('Opening PDF modal:', pdfSrc, title); // Debug log
        
        // Generate unique timestamp to force iframe reload
        const timestamp = Date.now();
        const uniquePdfSrc = `${pdfSrc}?t=${timestamp}#page=1`;
        
        const overlay = document.createElement('div');
        overlay.className = 'pdf-modal-overlay';
        overlay.innerHTML = `
            <div class="pdf-modal-container">
                <div class="pdf-modal-header">
                    <h3>${title}</h3>
                    <button class="pdf-modal-close" onclick="closePDFModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="pdf-modal-content">
                    <iframe 
                        src="${uniquePdfSrc}" 
                        width="100%" 
                        height="600px" 
                        frameborder="0" 
                        onload="console.log('PDF loaded successfully at page 1')" 
                        onerror="console.log('PDF failed to load')"
                        id="pdf-iframe-${timestamp}">
                    </iframe>
                    <div class="pdf-fallback" style="display: none; padding: 2rem; text-align: center;">
                        <p>PDF couldn't be loaded directly. <a href="${pdfSrc}" target="_blank" style="color: #9333ea;">Click here to download/view PDF</a></p>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        
        // Force iframe to start at first page
        const iframe = overlay.querySelector('iframe');
        if (iframe) {
            // Additional method to ensure PDF starts at page 1
            setTimeout(() => {
                try {
                    iframe.contentWindow.scrollTo(0, 0);
                } catch (e) {
                    console.log('Could not scroll iframe (cross-origin restriction)');
                }
            }, 100);
        }
        
        // Add click outside to close
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closePDFModal();
            }
        });
        
        // Check if iframe loads successfully after a delay
        setTimeout(() => {
            const iframe = overlay.querySelector('iframe');
            const fallback = overlay.querySelector('.pdf-fallback');
            if (iframe && iframe.contentDocument && iframe.contentDocument.body.innerHTML === '') {
                fallback.style.display = 'block';
                iframe.style.display = 'none';
            }
        }, 3000);
        showModalCloseBtn(closePDFModal);
    }

    function closePDFModal() {
        const overlay = document.querySelector('.pdf-modal-overlay');
        if (overlay) {
            overlay.remove();
            document.body.style.overflow = 'auto';
        }
        hideModalCloseBtn();
    }

    // Make functions globally accessible
    window.openPDFModal = openPDFModal;
    window.closePDFModal = closePDFModal;

    // Test function for PDF viewer
    window.testPDFViewer = function() {
        console.log('Testing PDF viewer...');
        openPDFModal('packaging/Patilkaki Box Packaging Design.pdf', 'Test PDF');
    };

    // Function to open image modal
    function openImageModal(imageSrc, imageTitle) {
        // Create modal overlay
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'image-modal-overlay';
        modalOverlay.innerHTML = `
            <div class="image-modal-container">
                <div class="image-modal-header">
                    <h3>${imageTitle}</h3>
                    <button class="image-modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="image-modal-content">
                    <img src="${imageSrc}" alt="${imageTitle}">
                </div>
            </div>
        `;
        
        // Add to body
        document.body.appendChild(modalOverlay);
        
        // Show modal with animation
        setTimeout(() => {
            modalOverlay.classList.add('active');
        }, 10);
        
        // Close functionality
        const closeBtn = modalOverlay.querySelector('.image-modal-close');
        const closeModal = () => {
            modalOverlay.classList.remove('active');
            hideModalCloseBtn();
            setTimeout(() => {
                document.body.removeChild(modalOverlay);
            }, 300);
        };
        
        closeBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
        
        // Keyboard support
        const handleKeydown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleKeydown);
            }
        };
        document.addEventListener('keydown', handleKeydown);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Re-enable body scroll when modal closes
        modalOverlay.addEventListener('transitionend', function() {
            if (!modalOverlay.classList.contains('active')) {
                document.body.style.overflow = '';
            }
        });
        showModalCloseBtn(closeModal);
    }

    // Contact Modal Functionality
    const contactModal = document.getElementById('contact-modal-overlay');
    const contactModalClose = document.getElementById('contact-modal-close');
    const contactForm = document.getElementById('contact-form');
    
    // Get only "Let's Connect" buttons (not contact links)
    const connectButtons = document.querySelectorAll('a[href="#contact"].lets-connect, .lets-connect');
    
    // Open modal when "Let's Connect" buttons are clicked
    connectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openContactModal();
        });
    });
    
    // Close modal when clicking the close button
    contactModalClose.addEventListener('click', closeContactModal);
    
    // Close modal when clicking outside the modal
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            closeContactModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactModal.classList.contains('active')) {
            closeContactModal();
        }
    });
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission();
    });
    
    function openContactModal() {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        showModalCloseBtn(closeContactModal);
    }
    
    function closeContactModal() {
        contactModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        // Reset form
        contactForm.reset();
        hideModalCloseBtn();
    }
    
    function handleFormSubmission() {
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        // Simple validation
        if (!email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Show success message (placeholder functionality)
        const submitBtn = contactForm.querySelector('.form-submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Reset after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #9333ea, #7c3aed)';
            closeContactModal();
        }, 3000);
        
        // Here you would typically send the data to your backend
        console.log('Form submitted:', { email, message });
    }

    const modalCloseBtn = document.getElementById('modal-close-btn');
    function showModalCloseBtn(closeFn) {
        if (!modalCloseBtn) return;
        modalCloseBtn.onclick = closeFn;
        modalCloseBtn.style.display = 'flex';
        modalCloseBtn.classList.add('show');
        modalCloseBtn.classList.remove('hide');
    }
    function hideModalCloseBtn() {
        if (!modalCloseBtn) return;
        modalCloseBtn.classList.remove('show');
        modalCloseBtn.classList.add('hide');
        setTimeout(() => { modalCloseBtn.style.display = 'none'; }, 300);
    }

    // Nav link close modal
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // If any modal is open, close it first
            let closed = false;
            if (document.querySelector('.gallery-overlay.active')) {
                closeGallery(); closed = true;
            }
            if (document.getElementById('contact-modal-overlay').classList.contains('active')) {
                closeContactModal(); closed = true;
            }
            if (document.querySelector('.pdf-modal-overlay')) {
                closePDFModal(); closed = true;
            }
            if (document.querySelector('.image-modal-overlay')) {
                hideModalCloseBtn();
                document.body.querySelector('.image-modal-overlay')?.remove(); closed = true;
            }
            if (closed) {
                setTimeout(() => {
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
                    }
                }, 350);
                e.preventDefault();
            }
        });
    });

    // Copy mobile number functionality
    const copyMobileBtn = document.getElementById('copy-mobile-btn');
    const copyMobileFeedback = document.getElementById('copy-mobile-feedback');
    const mobileNumber = '8329474660';

    if (copyMobileBtn) {
        copyMobileBtn.addEventListener('click', async function() {
            try {
                await navigator.clipboard.writeText(mobileNumber);
                copyMobileFeedback.classList.add('show');
                const icon = this.querySelector('i');
                icon.className = 'fas fa-check';
                setTimeout(() => {
                    copyMobileFeedback.classList.remove('show');
                    icon.className = 'fas fa-copy';
                }, 2000);
            } catch (err) {
                const textArea = document.createElement('textarea');
                textArea.value = mobileNumber;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                copyMobileFeedback.classList.add('show');
                const icon = this.querySelector('i');
                icon.className = 'fas fa-check';
                setTimeout(() => {
                    copyMobileFeedback.classList.remove('show');
                    icon.className = 'fas fa-copy';
                }, 2000);
            }
        });
    }
}); 