function resizeAll(){
        //MOBILE    
        if(propotion){
            //NAVBAR
            
            navbar.height( (widthWindow / 10));
            divNB1.height( navbar.height() );
            divNB2.height( navbar.height() );
            divNB3.height( navbar.height() );
    
            textButtonNB.css("font-size" , (widthWindow * 0.03));
            brandP.css("font-size" , (widthWindow * 0.03));
    
            divNB1.css("visibility" , "visible");
            
            //ASIDE
    
            aside.width( (widthWindow /2) );
            aside.height( ((heightWindow - navbar.height())) );
    
            //CONTENT
            content.width( (widthWindow - (content.offsetWidth  - content.clientWidth)) );
            //content.height( ((heightWindow - navbar.height()) - 4 ) );
            content.css("margin-left" , "0");
                
            aside.css("left" , ((-aside.width())*2));
            
                
            //console.log("Mobile");
        } else { //LAPTOP textContact
            if(realDevide == true)
            {
                //NAVBAR
                navbar.height( heightWindow / 15);
                divNB1.height( navbar.height() );
                divNB2.height( navbar.height() );
                divNB3.height( navbar.height() );
        
                textButtonNB.css("font-size" , (heightWindow * 0.03));
                brandP.css("font-size" , (heightWindow * 0.03));
                
                divNB1.css("visibility" , "hidden");
        
                //ASIDE
                aside.css("left" , "0");
                asideContent.height( (heightWindow - navbar.height()) );
                aside.width( (widthWindow / 6) );
                aside.height( ((heightWindow - navbar.height()) - 2)  );

                //CONTENT
                content.width( ((widthWindow - aside.width()) - (2 + (content.offsetWidth  - content.clientWidth))) );
                content.css("margin-left" , (aside.width()));
        
                //console.log("Laptop");
            }
        }
        asideContent.css( "margin-top" , (navbar.height() - pvs.height() ) );
    
        iconNab.width( navbar.height()/1.5 );
        $("#iconDiv").width( ( (iconNab.width()  ) ) );
    
        asidesType.height( ((heightWindow - (navbar.height() + myAccountDiv.height())) -2 ) );
    
        navbar.css("max-width" , widthWindow );
    
        
        $("#textAreaW").height( (divUpWrite.height() * 2) );
        $("#textAreaW").width( (divUpWrite.width() * 0.9) );
        
}

