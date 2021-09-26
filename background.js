const filter = {
  urls: [
    '*://www.youtube.com/',
    '*://www.youtube.com/*',
  ],
};

const opt = ['blocking'];

window.chrome.webRequest.onBeforeRequest.addListener(
  page => {
    console.log('page blocked - ' + page.url);
    var currentTime = new Date();
    var startTime = new Date();
    startTime.setHours(19);
    startTime.setMinutes(00);
    var endTime = new Date();
    endTime.setHours(22);
    endTime.setMinutes(00);

    if ((currentTime.getTime() > startTime.getTime()) && (currentTime.getTime() < endTime.getTime()))
    {
      //can be accessed in this interval
    }
    else{
      return {
        cancel: true,
      };
    };
  },
  filter,
  opt
);
