import { Toast } from 'mint-ui';

export default {
    isEmpty(contrl)
    {
        return (contrl === undefined || contrl === null || this.trim(contrl) == '');
    },
    trim(str)
    {
      if(str === null || str === undefined) 
           return ''
      else
           return str.toString().replace(/^\s+|\s+$/g,"");
    },
    htmlEscape(str) {
        return str.toString()
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    },
    showMessage(msg)
         {
             Toast({
                    message: msg,
                    position: 'middle',
                    duration: 3000
                    });
         },
    Device:[],
    PrintTemplates:[],
    PrinterDriver:null,
    Printer:null
}