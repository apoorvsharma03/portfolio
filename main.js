setInterval(gettime, 1000);

function gettime(){
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var ses = 'AM';

    if(hr > 11){
        ses = 'PM';
    }

    if(hr > 12){
        hr -= 12;
    }

    if(hr < 10){
        hr = '0' + hr
    }

    if(min < 10){
        min = '0' + min
    }   

    if(sec < 10){
        sec = '0' + sec
    }

    document.getElementById('hrs').innerHTML = hr + ':';
    document.getElementById('min').innerHTML = min + ':';
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('ses').innerHTML = ses;
}


function getinfo(){
    var handle = document.getElementById('cfhandle').value;
    var link = 'https://codeforces.com/api/user.rating?handle=' + handle;

    var flag = 1;
    var rating;
    fetch(link)
    .then(res => {
        if(res.ok == false){
            alert("Invalid CodeForces Handle!");
            flag = 0;
        }
    })
    if(flag == 1){
        fetch(link)
        .then(res => res.json())
        .then(data => {
            console.log(data.status);
            if(data.status == false){
                alert("Invalid Handle!");
            }
            else{
                document.getElementById('handle').innerHTML = handle;
                const l = data.result.length;
                if(l == 0){
                    document.getElementById('rating').innerHTML = '---';
                    document.getElementById('title').innerHTML = 'None. Give a contest first!';
                    document.getElementById('title').style.color = 'black';
                }
                else{
                    const rating = data.result[l-1].newRating;
                    document.getElementById('rating').innerHTML = rating;
                    if(rating <= 1199){
                        document.getElementById('title').innerHTML = 'Newbie';
                        document.getElementById('title').style.color = 'rgb(128,128,128)';
                    }
                    if(rating >= 1200 && rating <= 1399){
                        document.getElementById('title').innerHTML = 'Pupil';
                        document.getElementById('title').style.color = 'rgb(1,129,0)';
                    }
                    if(rating >= 1400 && rating <= 1699){
                        document.getElementById('title').innerHTML = 'Specialist';
                        document.getElementById('title').style.color = 'rgb(2,168,159)';
                    }
                    if(rating >= 1600 && rating <= 1899){
                        document.getElementById('title').innerHTML = 'Expert';
                        document.getElementById('title').style.color = 'rgb(1,1,255)';
                    }
                    if(rating >= 1900 && rating <= 2099){
                        document.getElementById('title').innerHTML = 'Candidate Master';
                        document.getElementById('title').style.color = 'rgb(129,1,128)';
                    }
                    if(rating >= 2100 && rating <= 2299){
                        document.getElementById('title').innerHTML = 'Master';
                        document.getElementById('title').style.color = 'rgb(254,164,1)';
                    }
                    if(rating >= 2300 && rating <= 2399){
                        document.getElementById('title').innerHTML = 'International Master';
                        document.getElementById('title').style.color = 'rgb(254,165,1)';
                    }
                    if(rating >= 2400 && rating <= 2599){
                        document.getElementById('title').innerHTML = 'Grandmaster';
                        document.getElementById('title').style.color = 'rgb(254,0,1)';
                    }
                    if(rating >= 2600 && rating <= 2999){
                        document.getElementById('title').innerHTML = 'International Grandmaster';
                        document.getElementById('title').style.color = 'rgb(254,0,1)';
                    }
                    if(rating >= 3000){
                        document.getElementById('title').innerHTML = 'Legendary Grandmaster';
                        document.getElementById('title').style.color = 'rgb(254,0,1)';
                    }
                }
            }
        })
    }
}