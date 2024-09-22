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

            ]
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
            ]
        },
        
    ]
})