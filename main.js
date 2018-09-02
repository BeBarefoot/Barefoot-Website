
document.addEventListener('DOMContentLoaded', wrap => {

    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if (wrapper.className.indexOf('skewed') != -1) {
    skew = 1000}

    wrapper.addEventListener('mousemove', e => {
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        handle.style.left = e.clientX + delta + 'px';
        topLayer.style.width = e.clientX + skew + delta + 'px';
    });   
});

    document.getElementById("click5").addEventListener('click', play5ths =>
            document.getElementById("play5ths").play());
        
        
    document.getElementById("clickW").addEventListener('click', playWill =>
            document.getElementById("playWill").play());