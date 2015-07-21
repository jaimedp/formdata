
$('#upload-file').on('submit', function (e) {
    e.preventDefault();
    var data, xhr;
    data = new FormData();
    var inputControl = $('#file')[0];
    data.append('file', inputControl.files[0]);

    $.ajax({
        type: 'POST',
        url: '',
        processData: false,
        contentType: false,
        data: data,
        headers: {
            'authorization': ''
        }

    });
});

