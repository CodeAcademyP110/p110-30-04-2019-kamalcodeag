$(document).ready(function()
{
    "use strict";
    $(".spec-container").hide();
    $(document).on("click",".spec-support",function()
    {
        $(".spec-container").show();
        $(this).hide();
    });

    $("#input").keydown(function(e)
    {
        let inputValue = $("#input").val();
        let mainValue = inputValue.trim();
        if(e.keyCode === 13 && e.shiftKey === false) 
        {
            if(mainValue !== "")
            {
                if(mainValue[0].toUpperCase() !== mainValue[0])
                {
                    let chatLineCustomer = $("<div></div>").addClass("p-2 d-flex align-items-center justify-content-end spec-message spec-chat-line-customer spec-hover").appendTo($(".spec-chat-box-main"));
                    $("<p></p>").addClass("mb-0 pr-2 text-white").text(mainValue).appendTo(chatLineCustomer);
                    $("<img>").attr("src","img/customer.jpg").addClass("spec-customer").appendTo(chatLineCustomer);
                    $("#input").val("");
                }
                else
                {
                    let chatLineSupporter = $("<div></div>").addClass("py-2 px-3 d-flex align-items-center spec-message spec-chat-line-supporter spec-hover").appendTo($(".spec-chat-box-main"));
                    $("<img>").attr("src","img/supporter.jpg").addClass("spec-supporter").appendTo(chatLineSupporter);
                    $("<p></p>").addClass("mb-0 pl-2 text-white").text(mainValue).appendTo(chatLineSupporter);
                    $("#input").val("");
                }

                // JavaScript

                // let specTopRight = document.querySelector(".spec-top-right");
                // let specMessage = document.querySelectorAll(".spec-message");

                // [...specMessage].map(message => 
                // { 
                //     message.onclick = function()
                //     {
                //         this.classList.toggle("spec-selected");
                //         specTopRight.classList.remove("d-block");

                //         for(let i=0; i<specMessage.length; i++)
                //         {
                //             if(specMessage[i].classList.contains("spec-selected"))
                //             {
                //                 specTopRight.classList.add("d-block");
                //             }
                //         }
                //     }

                // })

                // specTopRight.onclick = function()
                // {
                //     [...document.querySelectorAll(".spec-selected")].map(message => message.remove());
                // }

                // specChatBox.scrollTo(0, specChatBox.scrollHeight);

                // JavaScript

                // jQuery

                $(".spec-message").each((index,value) =>
                {
                    $(value).on("click",function()
                    {
                        $(this).toggleClass("spec-selected");
                    })
                })

                // jQuery               
            }
        }
        else if(e.keyCode === 27) 
        {
            $("#input").val("");
        }
        else 
        {
            return;
        }
    })    
})