fs.unlink('nodeJS_archietecture.txt',function(err){
    if(err)
    {
        console.log('file error');
    }else{
        console.log('file deleted');
    }
})
