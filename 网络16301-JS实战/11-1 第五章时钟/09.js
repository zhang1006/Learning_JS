        function show(){
           var now = new Date();
           var day = now.getDay();
           switch (day){
                        case 0:day="日";
                        break;
                        case 1:day="一";
                        break;
                        case 2:day="二";
                        break;
                        case 3:day="三";
                        break;
                        case 4:day="四";
                        break;
                        case 5:day="五";
                        break;
                        case 6:day="六";
                        break;
                        default:  break;
           }
           var xqObj = document.getElementById('xq');
           xqObj.innerHTML = day;

           var date = now.getDate();
           var rqObj = document.getElementById('rq');
           rqObj.innerHTML = date;

           var year = now.getFullYear();
           var nfObj = document.getElementById('nf');
           nfObj.innerHTML = year;

           var month = now.getMonth()+1;
           var yfObj = document.getElementById("yf");
           yfObj.innerHTML = month;

           var hour = now.getHours();
           var minute = now.getMinutes();
           var second = now.getSeconds();
           var sjObj = document.getElementById("sj");
           sjObj.innerHTML = hour+":"+minute+":"+second;
        }