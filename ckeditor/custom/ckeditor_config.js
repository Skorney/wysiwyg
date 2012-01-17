CKEDITOR.editorConfig = function( config )
{
    //подключаем пользовательские plugins
    config.extraPlugins = 'popupimage';

    config.toolbar = 'Custom';
    config.toolbar_Custom =
        [
            { name: 'document', items : [ 'Source', 'NewPage','Preview' ] },
            { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
            { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','Scayt' ] },
            { name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'
                ,'Iframe', 'PopupImage' ] },
            '/',
            { name: 'styles', items : [ 'Styles','Format' ] },
            { name: 'basicstyles', items : [ 'Bold','Italic','Strike','-','RemoveFormat' ] },
            { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote' ] },
            { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
            { name: 'tools', items : [ 'Maximize','-','About' ] }
        ];

    /* пути к скриптам для выбра*/
    config.filebrowserBrowseUrl = './kcfinder/browse.php?type=files&dir=images/1';
    config.filebrowserImageBrowseUrl = './kcfinder/browse.php?type=images&dir=images/1';
    config.filebrowserFlashBrowseUrl = './kcfinder/browse.php?type=flash';

    /* пути к скриптам-загрузчикам */
    config.filebrowserUploadUrl = './kcfinder/upload.php?type=files&dir=images/1';
    config.filebrowserImageUploadUrl = './kcfinder/upload.php?type=images&dir=images/1';
    config.filebrowserFlashUploadUrl = './kcfinder/upload.php?type=flash';

};