import {reactive} from 'vue';

export const store = reactive ({
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
    active:0,
    carousel:[
        {
            img:'/public/img/h5-slide-3-background.jpg',
            title: 'Contemporary Ideas',
            phrase: 'Lorem Ipsn gravida nibh vel velit acutor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat Ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris',
        },
        {
            img:'/public/img/h5-slide-1-background.jpg',
            title: 'Accelerate Your Career',
            phrase: 'Lorem Ipsn gravida nibh vel velit acutor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat Ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris',
        },
        {
            img:'/public/img/h5-slide-2-background.jpg',
            title: 'Premium Education',
            phrase: 'Lorem Ipsn gravida nibh vel velit acutor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat Ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris',
        },

    ]   
})