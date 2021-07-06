window.$ = window.jQuery = require("jquery");

var colorThief = new ColorThief();
var computingNum = 0
var Mustache = require('mustache')

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}


var html2canvas = require('html2canvas')

window.onload = () => {
}

var showColorsForImage = function ($image, $imageSection) {
    computingNum++;
    if (computingNum > 0) {
        $('#text').text('Processing...')
    }
    var image = $image;
    var start = Date.now();
    var elapsedTimeForGetColor = Date.now() - start;
    var palette = colorThief.getPalette(image, parseInt($('#cnum').val()));
    $(':root').css('--color-num',parseInt($('#cnum').val()))
    var elapsedTimeForGetPalette = Date.now() - start + elapsedTimeForGetColor;
    
        var colorThiefOutput = {
            colorarray:JSON.stringify(palette),
            palette: palette,
            elapsedTimeForGetColor: elapsedTimeForGetColor,
            elapsedTimeForGetPalette: elapsedTimeForGetPalette
        };
        var colorThiefOuputHTML = Mustache.render($('#color-thief-output-template').html(), colorThiefOutput);
        $imageSection.addClass('with-color-thief-output');
        $imageSection.find('.run-functions-button').addClass('hide');

        for (let i of document.getElementById('dragged-images').childNodes) {
            if (i.nodeType == 1) {
                $(i).contextmenu(function (e) {
                    e.preventDefault() // 阻止右键菜单默认行为
                    var target = this
                    var scale = parseInt($('#scalenum').val())
                    $("#rightclick").show()
                    $('#rightmenu').css('top', '' + e.clientY + 'px')
                    $('#rightmenu').css('left', '' + e.clientX + 'px')
                    $('#btnremove')[0].onclick = () => {
                        target.remove()
                    }

                    $('#btncopy')[0].onclick = () => {
                        
                        alert(target.childNodes[1].childNodes[3].childNodes[1].getAttribute('colorarray'))
                        
                    }

                    $('#btnsave')[0].onclick = () => {
                        $("#rightclick").hide();
                        console.log(target.getBoundingClientRect())
                        html2canvas(document.body, { 'scale': scale }).then(function (canvas_) {
                            var link = document.createElement("a");
                            var canvas = document.createElement('canvas')
                            var contex = canvas.getContext("2d");
                            canvas.width = (target.getBoundingClientRect().width-20)*scale;
                            canvas.height = (target.getBoundingClientRect().height-40)*scale;
                            contex.drawImage(canvas_,(-target.offsetLeft-10)*scale,(-target.offsetTop-10)*scale,canvas_.width,canvas_.height)
                            var imgData = canvas.toDataURL('image/jpeg', 0.9);
                            var blob = dataURLtoBlob(imgData);
                            var objurl = URL.createObjectURL(blob);
                            link.download = 'saved.jpg';
                            link.href = objurl;
                            link.click();

                        });
                    }

                    console.log(e)
                })
                if (
                    document.getElementById('left-contain').getBoundingClientRect().height <=
                    document.getElementById('right-contain').getBoundingClientRect().height + 10) {
                    document.getElementById('left-contain').appendChild(i);
                } else {
                    document.getElementById('right-contain').appendChild(i);
                }
            }
        }




        setTimeout(function () {
            $imageSection.find('.color-thief-output').html(colorThiefOuputHTML).slideDown();

            // If the color-thief-output div is not in the viewport or cut off, scroll down.
            var windowHeight = $(window).height();
            var currentScrollPosition = $('html').scrollTop()
            var outputOffsetTop = $imageSection.find('.color-thief-output').offset().top

            computingNum--;
            if (computingNum == 0) {
                $('#text').text('Drop images here')
            }

            if ((currentScrollPosition < outputOffsetTop) && (currentScrollPosition + windowHeight - 250 < outputOffsetTop)) {
                $('html, body').animate({ scrollTop: outputOffsetTop - windowHeight + 200 + "px" });
            }
        }, 100);

    

};

// Drag'n'drop demo
// Thanks to Nathan Spady (http://nspady.com/) who did the bulk of the drag'n'drop work.

// Setup the drag and drop behavior if supported
// Modernizr.draganddrop &&

$('#drag-drop').show();
var $dropZone = $('#drop-zone');
var handleDragEnter = function (event) {
    $dropZone.addClass('dragging');
    return false;
};
var handleDragLeave = function (event) {
    $dropZone.removeClass('dragging');
    return false;
};
var handleDragOver = function (event) {
    return false;
};
var handleDrop = function (event) {
    $dropZone.removeClass('dragging');
    handleFiles(event.originalEvent.dataTransfer.files);
    return false;
};
$dropZone
    .on('dragenter', handleDragEnter)
    .on('dragleave', handleDragLeave)
    .on('dragover', handleDragOver)
    .on('drop', handleDrop);



function handleFiles(files) {
    var $draggedImages = $('#dragged-images');
    var imageType = /image.*/;
    var fileCount = files.length;

    for (var i = 0; i < fileCount; i++) {
        var file = files[i];

        if (file.type.match(imageType)) {
            var reader = new FileReader();
            reader.onload = function (event) {
                console.log(event)
                let imageInfo = {
                    images: [
                        { 'class': 'dropped-image', file: event.target.result, path: file.path }
                    ]
                };

                var imageSectionHTML = Mustache.render($('#image-section-template').html(), imageInfo);
                $draggedImages.prepend(imageSectionHTML);

                var $imageSection = $draggedImages.find('.image-section').first();
                var $image = $('.dropped-image .target-image').first();

                // Must wait for image to load in DOM, not just load from FileReader
                $image.on('load', function (e) {
                    console.log(e)
                    showColorsForImage(e.target, $imageSection);
                });
            };
            reader.readAsDataURL(file);
        } else {
            alert('File must be a supported image type.');
        }
    }
}