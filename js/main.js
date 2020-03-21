function evalGrade() {
    var rank = document.querySelector("#rank");
    var math = document.getElementById("math").value;
    var science = document.getElementById("science").value;
    var english = document.getElementById("english").value;
    var filipino = document.getElementById("filipino").value;
    var pe = document.getElementById("pe").value;
    var evaluation1 = document.querySelector("#evaluation1");
    var evaluation2 = document.querySelector("#evaluation2");
    var evaluation3  = document.querySelector("#evaluation3");
    var evaluation4 = document.querySelector("#evaluation4");
    var evaluation5 = document.querySelector("#evaluation5");
    evaluation1.style.color = "#011f4b";
    evaluation2.style.color = "#011f4b";
    evaluation3.style.color = "#011f4b";
    evaluation4.style.color = "#011f4b";
    evaluation5.style.color = "#011f4b";
    rank.style.color = "#011f4b";

    if (math >=90 && math <=100)
    {
        evaluation1.textContent = "Excellent";
    }
    else if(math <=89 && math >=80)
    {
        evaluation1.textContent = "Good";
    }
    else if(math <=79 && math >=70)
    {
        evaluation1.textContent = "Average";
    }
    else if(math <=69 && math >=60)
    {
        evaluation1.textContent = "Poor";
    }
    else if(math <=59 && math >0)
    {
        evaluation1.textContent = "Fail";
    }

    if (science <=100 && science >=90)
    {
        evaluation2.textContent = "Excellent";
    }
    else if(science <=89 && science >=80)
    {
        evaluation2.textContent = "Good";
    }
    else if(science <=79 && science >=70)
    {
        evaluation2.textContent = "Average";
    }
    else if(science <=69 && science >=60)
    {
        evaluation2.textContent = "Poor";
    }
    else if(science <=59 && science >0)
    {
        evaluation2.textContent = "Fail";
    }

    if (english <=100 && english >=90)
    {
        evaluation3.textContent = "Excellent";
    }
    else if(english <=89 && english >=80)
    {
        evaluation3.textContent = "Good";
    }
    else if(english <=79 && english >=70)
    {
        evaluation3.textContent = "Average";
    }
    else if(english <=69 && english >=60)
    {
        evaluation3.textContent = "Poor";
    }
    else if(english <=59 && english >0)
    {
        evaluation3.textContent = "Fail";
    }

    if (filipino <=100 && filipino >=90)
    {
        evaluation4.textContent = "Excellent";
    }
    else if(filipino <=89 && filipino >=80)
    {
        evaluation4.textContent = "Good";
    }
    else if(filipino <=79 && filipino >=70)
    {
        evaluation4.textContent = "Average";
    }
    else if(filipino <=69 && filipino >=60)
    {
        evaluation4.textContent = "Poor";
    }
    else if(filipino <=59 && filipino >0)
    {
        evaluation4.textContent = "Fail";
    }

    if (pe <=100 && pe >=90)
    {
        evaluation5.textContent = "Excellent";
    }
    else if(pe <=89 && pe >=80)
    {
        evaluation5.textContent = "Good";
    }
    else if(pe <=79 && pe >=70)
    {
        evaluation5.textContent = "Average";
    }
    else if(pe <=69 && pe >=60)
    {
        evaluation5.textContent = "Poor";
    }
    else if(pe <=59 && pe >0)
    {
        evaluation5.textContent = "Fail";
    }

        //rank
        if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Top Honor Student";
        }
        //repeater
        else if((math >=0 && math <=50) && (science >=0 && science <=59) && (english >=0 && english <=59) && (filipino >=0 && filipino <=59) && (pe >=SS0 && pe<=59))
        {
            rank.textContent = "Repeater";
        }
    
        else if((math >=60 && math <=69) && (science >=60 && science <=69) && (english >=60 && english <=69) && (filipino >=60 && filipino <=69) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Repeater";
        }
    
        //0-50
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
    
        //60-69
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
    
        //70-79
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=59) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
    
        //80-89 
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
    
        //60-69 and 80-89 heheheheehe
        else if((math >=60 && math <=69) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
    
        //80-89 and 60-69 hehehe hakdog
        else if((math >=80 && math <=89) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        //60-69 and 70-79 stay safe y'all
        else if((math >=60 && math <=69) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }

        //70-79 and 60-69 sana okay lang tayong lahat
        else if((math >=70 && math <=79) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }

        //0-59 and 70-79 yown 
        else if((math >=0 && math <=59) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        //0-59 and 80-89 pagod na siz
        else if((math >=0 && math <=59) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }

        //70-79 and 0-59 ncov ka ba? wala tanong ko lang hahaha
        else if((math >=70 && math <=79) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
            //80-89 and 0-59 malapit na ba?
        else if((math >=80 && math <=89) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
    
        //0-59 and 60-69 antok na ako dzai
        else if((math >=0 && math <=59) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
    
        //60-69 and 0-59 onti na lang
        else if((math >=60 && math <=69) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
    
        //70-79 and 80-89 okay last one
        else if((math >=70 && math <=79) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        //80-89 and 70-79 matatapos na yieeh
         else if((math >=80 && math <=89) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student";
        }
        else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
        {
        rank.textContent = "Second Honorable Student";
        }
        else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
        {
            rank.textContent = "Second Honorable Student"; 
        }
        else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
        {
            rank.textContent = "Second Honorable Student"; 
        }

        else
        {
            rank.textContent = "Repeater";
        }

        }

    
