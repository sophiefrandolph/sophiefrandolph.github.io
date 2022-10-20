window.addEventListener('load', function () {

    if ( document.querySelector('.section-hero-tl') ) {
        if ( document.querySelector('.section-quotes-b') ) {
            
            document.querySelector('.section-quotes-b .section-quotes-b-containerimg .section-quotes-b-containerimg-imgs:first-child').classList.add('active');
            document.querySelector('.section-quotes-b .section-quotes-b-containertext .section-quotes-b-containerquotes .section-quotes-b-containerquotes-quote:first-child').classList.add('active');

            let indexSectionQuote = 1;
            let indexMaxSectionQuote = document.querySelectorAll('.section-quotes-b .section-quotes-b-containerimg .section-quotes-b-containerimg-imgs').length;

            document.querySelector('.section-quotes-b .section-quotes-b-containerarrows img:first-child').addEventListener('click', function(){

                document.querySelector('.section-quotes-b .section-quotes-b-containerimg .section-quotes-b-containerimg-imgs:nth-child('+indexSectionQuote+')').classList.remove('active');
                document.querySelector('.section-quotes-b .section-quotes-b-containertext .section-quotes-b-containerquotes .section-quotes-b-containerquotes-quote:nth-child('+indexSectionQuote+')').classList.remove('active');

                indexSectionQuote--;
                if(indexSectionQuote < 1) indexSectionQuote = indexMaxSectionQuote;

                document.querySelector('.section-quotes-b .section-quotes-b-containerimg .section-quotes-b-containerimg-imgs:nth-child('+indexSectionQuote+')').classList.add('active');
                document.querySelector('.section-quotes-b .section-quotes-b-containertext .section-quotes-b-containerquotes .section-quotes-b-containerquotes-quote:nth-child('+indexSectionQuote+')').classList.add('active');
            });

            document.querySelector('.section-quotes-b .section-quotes-b-containerarrows img:last-child').addEventListener('click', function(){
                
                document.querySelector('.section-quotes-b .section-quotes-b-containerimg .section-quotes-b-containerimg-imgs:nth-child('+indexSectionQuote+')').classList.remove('active');
                document.querySelector('.section-quotes-b .section-quotes-b-containertext .section-quotes-b-containerquotes .section-quotes-b-containerquotes-quote:nth-child('+indexSectionQuote+')').classList.remove('active');

                indexSectionQuote++;
                if(indexSectionQuote > indexMaxSectionQuote) indexSectionQuote = 1;

                document.querySelector('.section-quotes-b .section-quotes-b-containerimg .section-quotes-b-containerimg-imgs:nth-child('+indexSectionQuote+')').classList.add('active');
                document.querySelector('.section-quotes-b .section-quotes-b-containertext .section-quotes-b-containerquotes .section-quotes-b-containerquotes-quote:nth-child('+indexSectionQuote+')').classList.add('active');
            });
        }    
    }

})