import {reactive} from 'vue';


export const store = reactive ({
    // header
    navbar:[
        {
            placeholder: 'HOME',
            dropdowns: [
                
                'Home 1',
                'Home 2',
                'Home 3',
                'Home 4',
                'Home 5',
                'Home 6',
                'Home 7',
                'Home 8',
                'Home 9',
                'Home 10',
                'Home 11',
                'Home 12',
                'Landing'
                
            ]
        },
        {
            placeholder: 'COURSES',
            dropdowns: [
                'All Courses',
                'Standard List',
                'Course Single',
                'User dashboard',
            ],
            
        },
        {
            placeholder: 'INSTRUCTORS',
            dropdowns: [
                'Become an Instructor',
                'Instructor Single',
            ]
        },
        {
            placeholder: 'EVENTS',
            dropdowns: [
                'Events Calendar',
                'Events List',
                'Events Single',
            ]
        },
        {
            placeholder: 'PAGES',
            dropdowns: [
                'About',
                'Gallery',
                'Pricing Plan',
                'Blog',
                'Shop',
                'Forums',
                'Contact',
                'FAQ',
                'Coming Soon',
                'Error Page'
            ],
            blog:[
                'Standard List',
                'Masonry List',
                'Blog Split',
                'Standard Post',
                'Quote Post',
                'Link Post',
                'Audio Post',
                'Video Post'
            ],
            shop:[
                'Shop List',
                'Standard Product',
                'Grouped Product',
                'External Product',
                'Variable Product',
                'Three Columns Grid',
                'Three Columns Wide',
                'Four Columns Grid',
                'Four Columns Wide',
                'Five Columns Grid',
                'Five Columns Wide',
                'My account',
                'Cart',
                'Checkout'
            ],
            forums:[
                'All Forums',
                'Forum Topic'
            ]
        },
        {
            placeholder: 'ELEMENTS',
            dropdowns: [
                {
                 title: 'COURSE SHORTCODES',
                 links:[
                    'Course List',
                    'Course Slider',
                    'Course Table',
                    'Course Features',
                    'Instructor List',
                    'Instructor Slider',
                    'Education Timeline',
                    'Advanced Course Search',
                    'Linked Image List'
                 ]   
                },
                {
                    title: 'CLASSIC',
                    links:[
                        'Accordions & Toggles',
                        'Tabs',
                        'Buttons',
                        'Call To Action',
                        'Contact Form',
                        'Separators',
                        'Icon With Text',
                        'Blockquote',
                        'Typography'
                    ]
                },
                {
                    title: 'INFOGRAPHIC',
                    links:[
                        'Counters',
                        'Countdown',
                        'Pie Charts',
                        'Google Maps',
                        'Process',
                        'Progress Bar',
                        'Event List',
                        'Pricing Tables',
                        'Comparison Pricing Tables'
                    ]
                },
                {
                    title: 'PRESENTATION',
                    links:[
                        'Team Shortcode',
                        'Testimonials',
                        'Clients',
                        'Blog List Shortcode',
                        'Twitter List',
                        'Product List',
                        'Image Gallery',
                        'Masonry Gallery',
                        'Video Button'
                    ]
                },
            ]
            
        },
        
    ],
    // carosello jumbotron
    active:0,
    carousel:[
        {
            img:'/img/h5-slide-3-background.jpg',
            title: 'Contemporary Ideas',
            phrase: 'Lorem Ipsn gravida nibh vel velit acutor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat Ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris',
        },
        {
            img:'/img/h5-slide-1-background.jpg',
            title: 'Accelerate Your Career',
            phrase: 'Lorem Ipsn gravida nibh vel velit acutor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat Ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris',
        },
        {
            img:'/img/h5-slide-2-background.jpg',
            title: 'Premium Education',
            phrase: 'Lorem Ipsn gravida nibh vel velit acutor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat Ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris',
        },
    ],   

    // main
    // sezione box competenze acquisibili
    boxes:[
        {
            img:'img/h5-custom-icon-1.png',
            text: 'Languages'
        },
        {
            img:'img/h5-custom-icon-2.png',
            text: 'Software'
        },
        {
            img:'img/h5-custom-icon-3.png',
            text: 'Business'
        },
        {
            img:'img/h5-custom-icon-4.png',
            text: 'Chemistry'
        },
        {
            img:'img/h5-custom-icon-5.png',
            text: 'Science'
        },
        {
            img:'img/h5-custom-icon-6.png',
            text: 'DIY&Craft'
        },
    ],
    // carosello testimonials
    activeTestimonial: 0,
    testimCarousel:[
        {   img:'/img/testimonials-standard-6.png',
            phrase: 'Lorem Ipsn gravida nibh vel velit acutor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat Ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris',
            subject: 'Molly Simons',
            role: 'TEACHER'
        },
        {
            img:'/img/testimonials-standard-2.png',
            phrase: 'Lorem Ipsn gravida nibh vel velit acutor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat Ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris',
            subject: 'Joan Collins',
            role: 'STUDENT'
        },
        {
            img:'/img/testimonials-standard-1.png',
            phrase: 'Lorem Ipsn gravida nibh vel velit acutor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat Ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris',
            subject: 'Virginia Foster',
            role: 'STUDENT'
        },
    ],
    // sezione more info
    thumbs:[
        {
            thumbTitle: 'What we do',
            thumbText: [
                {
                    hdr: 'Learning Possibilities',
                    text: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
                    list:[
                        'We enrich live through learning',
                        'Maximizing potential through individual attention.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect.'
                    ],
                    
                }
            ],
            img:'/img/h12-tabs-icon-1.png'
        },
        {
            thumbTitle: 'Degree Programme',
            thumbText: [
                {
                    hdr: 'Inspiring Minds',
                    text: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
                    list:[
                        
                        'Maximizing potential through individual attention.',
                        'We enrich live through learning',
                        'People teach. People learn. This is where they connect.',
                        'The trusted name for specialized training.' 
                    ]
                }
            ],
            img:'/img/h12-tabs-icon-2.png'
        },
        {
            thumbTitle: 'Career Achievements',
            thumbText: [
                {
                    hdr: 'Investing in Knowledge',
                    text: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
                    list:[
                        'We enrich live through learning',
                        'Maximizing potential through individual attention.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect.'
                    ]
                }
            ],
            img:'/img/h12-tabs-icon-3.png'
        },
        {
            thumbTitle: 'Personal Management',
            thumbText: [
                {
                    hdr: 'Secure Your Future',
                    text: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
                    list:[
                        
                        'Maximizing potential through individual attention.',
                        'We enrich live through learning',
                        'People teach. People learn. This is where they connect.',
                        'The trusted name for specialized training.'
                    ]
                }
            ],
            img:'/img/h12-tabs-icon-4.png',
        },
        {
            thumbTitle: 'Step to Success',
            thumbText: [
                {
                    hdr: 'Where Learning Begins',
                    text: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
                    list:[
                        'We enrich live through learning',
                        'Maximizing potential through individual attention.',
                        'The trusted name for specialized training.',
                        'People teach. People learn. This is where they connect.',
                    ]
                }
            ],
            img:'/img/h12-tabs-icon-5.png'
        },
        {
            thumbTitle: 'Knowledge Transfer',
            thumbText: [
                {
                    hdr: 'Knowledge is Power',
                    text: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',
                    list:[
                        'Maximizing potential through individual attention.',
                        'We enrich live through learning',
                        'People teach. People learn. This is where they connect.',
                        'The trusted name for specialized training.',
                    ]
                }
            ],
            img:'/img/h12-tabs-icon-6.png'
        },
    ],
    thumbsActive: 0,
    
})