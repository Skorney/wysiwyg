CKEDITOR.editorConfig = function( config )
{
    //подключаем пользовательские plugins
    config.extraPlugins = 'popupimage';

    config.toolbar = 'Content';
    config.toolbar_Content =
        [
            { name: 'document', items : [ 'Source', 'NewPage','Preview' ] },
            { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
            { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','Scayt' ] },
            { name: 'insert', items : [ 'PopupImage','Table','SpecialChar' ] },
            { name: 'basicstyles', items : [ 'Bold','Italic','Strike','-','RemoveFormat' ] },
            { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote' ] },
            { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
            { name: 'tools', items : [ 'Maximize' ] }
        ];

    config.toolbar = 'Inline';
    config.toolbar_Inline =
        [
            { name: 'clipboard', items : [ 'PasteText','PasteFromWord' ] },
            { name: 'basicstyles', items : [ 'Bold','Italic','Strike','-','RemoveFormat' ] },
            { name: 'links', items : [ 'Link','Unlink' ] }
        ];

    /* пути к скриптам для выбра*/
    config.filebrowserBrowseUrl = './kcfinder/browse.php?type=files';
    config.filebrowserImageBrowseUrl = './kcfinder/browse.php?type=images&dir=images/1';
    config.filebrowserFlashBrowseUrl = './kcfinder/browse.php?type=flash';

    /* пути к скриптам-загрузчикам */
    config.filebrowserUploadUrl = './kcfinder/upload.php?type=files';
    config.filebrowserImageUploadUrl = './kcfinder/upload.php?type=images&dir=images/1';
    config.filebrowserFlashUploadUrl = './kcfinder/upload.php?type=flash';

};