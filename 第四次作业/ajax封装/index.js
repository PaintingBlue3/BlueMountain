function GET(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url)
    xhr.send();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status <300){
                console.log(xhr.status);
                console.log(xhr.statusText);
                console.log(xhr.response);
            }else{
                console.log('发生什么事了（出错了）')
            }
        }
    }
}


function POST(url, things){
    const xhr = new HTTPRequest();
    xhr.open('POST',url);
    xhr.send(things)
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status <300){
                console.log(xhr.status);
                console.log(xhr.statusText);
                console.log(xhr.response);
            }else{
                console.log('发生什么事了（出错了）')
            }
        }
    }
}