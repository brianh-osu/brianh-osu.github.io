import React from "react";
import ImageGallery from 'react-image-gallery'; 

const images = [
    {
        original: "images/resized-and-compressed-images/CSULB-grad-photoshoot-1.jpg",
        thumbnail: "images/resized-and-compressed-images/CSULB-grad-photoshoot-1.jpg",
        description: `I graduated in 2019 from Cal State Long Beach (CSULB) right during the peak of Covid-19. Needless to say 
        I was grateful for getting my bachelor's degree in Business Management right before the chaos began. Here's me 
        posing in front of CSULB's Walter Pyramid.`,
        originalHeight: "450px", 
    }, 
    {
        original: "images/resized-and-compressed-images/CSULB-grad-photoshoot-2.jpg",
        thumbnail: "images/resized-and-compressed-images/CSULB-grad-photoshoot-2.jpg",
        description: `'Candidly' walking through the halls of the College of Business`,
        originalHeight: "450px", 
    },
    {
        original: "images/resized-and-compressed-images/AX-2019-cosplay-self.jpg",
        thumbnail: "images/resized-and-compressed-images/AX-2019-cosplay-self.jpg",
        description: `Cosplaying as Himiko Toga (from the anime My Hero Academia) at Anime Expo 2019 in Los Angeles`,
        originalHeight: "450px", 
    },
    {
        original: "images/resized-and-compressed-images/AX-2019-cosplay-picture-himiko-toga.jpg",
        thumbnail: "images/resized-and-compressed-images/AX-2019-cosplay-picture-himiko-toga.jpg",
        description: `Posing next to another fellow cosplayer at Anime Expo 2019`,
        originalHeight: "450px", 
    },
    {
        original: "images/resized-and-compressed-images/Brian-Hapag-Lloyd-175th-anniversary.jpg" ,
        thumbnail: "images/resized-and-compressed-images/Brian-Hapag-Lloyd-175th-anniversary.jpg" ,
        description: `Celebrating 175 years of Hapag Lloyd and my 6th year of being with the company! I've been in the shipping & logistics
        industry since 2014, picking up temp jobs at different steamship lines. I ended up taking a job at Hapag-Lloyd 
        and I can confidently say that I'm happy to be with such an amazing company.`,
        originalHeight: "450px", 
    },
    {
        original: "images/resized-and-compressed-images/persona25-AX-2022-promo-pic.jpg" ,
        thumbnail: "images/resized-and-compressed-images/persona25-AX-2022-promo-pic.jpg" ,
        description: `I picked up DJing during college and have played for several clubs and venues. Most of them were either hosted
        by friends or by small event companies. Here's my first real promotional flyer picture with an actual head shot of 
        myself! It feels so legitimate for once. `,
        originalHeight: "450px", 
    },

    {
        original: "images/resized-and-compressed-images/AX-2022-set-picture.jpg" ,
        thumbnail: "images/resized-and-compressed-images/AX-2022-set-picture.jpg",
        description: `Taken at the end of my DJ set at Anime Expo 2022. Peak moment of my amateur dj career, absolutely riding on 
        the adrenaline rush! (Bonus points if you recognized my outfit- it's a cosplay of Kyouka
        Jirou from MHA, she's Earphone Jack hero)  `,
        originalHeight: "450px", 
    },
    {
        original: "images/resized-and-compressed-images/Keyboard-Becky-build.jpg" ,
        thumbnail: "images/resized-and-compressed-images/Keyboard-Becky-build.jpg" ,
        description: `This is Becky, my loving partner. I put my heart and soul into building this keyboard for her! I really
        got into keyboard building around 2020 when I decided to build a PC desktop after I graduated. I was done with using 
        Macbooks or any laptops, really. This was the gateway into me picking up the mechanical custom keyboard hobby! `,
        originalHeight: "450px", 
    },
    {
        original: "images/resized-and-compressed-images/Keyboard-Evita-build.jpg" ,
        thumbnail: "images/resized-and-compressed-images/Keyboard-Evita-build.jpg" ,
        description: `This is a board I built for my good friend and former housemate Evita. She loves all things girly and wanted
        to go for a pink & white themed keyboard `,
        originalHeight: "450px", 
    },
    {
        original: "images/resized-and-compressed-images/Keyboard-Ellis-build.jpg" ,
        thumbnail: "images/resized-and-compressed-images/Keyboard-Ellis-build.jpg" ,
        description: `This is a board I built for another good friend Ellis. Although this isn't the final version of her build because 
        Groupbuys are notorious for taking forever, this is her board! The case is finalized, and the end product is a 
        pastel and gradient themed keyboard. `,
        originalHeight: "450px", 
    },
    {
        original: "images/resized-and-compressed-images/Keyboard-brian-build1.jpg" ,
        thumbnail: "images/resized-and-compressed-images/Keyboard-brian-build1.jpg" ,
        description: `This is the board I currently use for work normally, it's called the Charon 65. I wanted something
        on the darker side while still having some accent and character (unlike completely black or monotone boards). `,
        originalHeight: "450px", 
    },
    {
        original: "images/resized-and-compressed-images/Keyboard-brian-build2.jpg" ,
        thumbnail: "images/resized-and-compressed-images/Keyboard-brian-build2.jpg" ,
        description: `This is the board I use at home and for school. It's called the Bear 65 (version 2). It's my 
        first Alice('Arisu') type layout, and I am absolutely enjoying it. `,
        originalHeight: "450px", 
    },
];

function GalleryPage() {
    return(
        <>
            <h2>Gallery </h2>
            <article id='galleryPage'>
                <ImageGallery id='galleryPage' class = 'image-gallery-description' items={images} />
            </article>
        </>
    );
};

export default GalleryPage; 

