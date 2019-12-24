/**
 Excel Rows 생성하기
 **/

 "use strict"
 var xl = require('excel4node');
 const path ="D:\\temp\\"; 


const dateFormat = (d, f) => {
  let weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
    switch ($1) {
        case "yyyy": return d.getFullYear();
        case "yy": return (d.getFullYear() % 1000).zf(2);
        case "MM": return (d.getMonth() + 1).zf(2);
        case "dd": return d.getDate().zf(2);
        case "E": return weekName[d.getDay()];
        case "HH": return d.getHours().zf(2);
        case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
        case "mm": return d.getMinutes().zf(2);
        case "ss": return d.getSeconds().zf(2);
        case "a/p": return d.getHours() < 12 ? "오전" : "오후";
        default: return $1;
    }
  });
}
const getYYYYMMDD = () => {
  //let curDate = new Date(new Date().getTime() + (mm*60000));

  // 분으로 나눔.
  let mm = getrandom(24*60);// (Math.floor(Math.random() * 10000)) % (24*60);
  let curDate = new Date();
  let toDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate());
  let nextDate = new Date(toDate.getTime() + (mm*60000));  
  return dateFormat(nextDate, 'yyyyMMddHHmmss');
}

// 1분  = 60000
// 24*60 = 1440;
String.prototype.string = function(len){
  var s = '', 
  i = 0;
  while (i++ < len) { 
    s += this;
  }
  return s;
};



String.prototype.zf = function(len){
  return "0".string(len - this.length) + this;
};
Number.prototype.zf = function(len){
  return this.toString().zf(len);
};


const getrandom = (max) => ((Math.floor(Math.random() * max)) %max)+1;


function createExcelData(){
  let excelRows = [];
  let excelRowLen = 1000;//Math.floor(Math.random() * 10);
  let i=0; 
  for(; i < excelRowLen; i++) {
    let row = {
      hhmm:   getYYYYMMDD(), // 등록일시
      no:     ""+getrandom(10) , // 자리수
      title:  ""+getrandom(5), // 품목
      cnt :   getrandom(10) // 수량
    };

    excelRows.push(row);
    
  }
  

  return excelRows;
}


function createExcel(){
  let excelRows = createExcelData();

  // Create a new instance of a Workbook class
  let wb = new xl.Workbook();

  var ws = wb.addWorksheet('Sheet 1');
   
  // Create a reusable style
  // var style = wb.createStyle({
  //   font: {
  //     color: '#FF0800',
  //     size: 12,
  //   },
  //   numberFormat: '$#,##0.00; ($#,##0.00); -',
  // });

  const category = ['요리', '안주', '음료', '소주', '맥주'];

  excelRows.forEach( (item, idx) => {

    console.log(item);

    ws.cell(idx+1, 1).string(item.hhmm);
    ws.cell(idx+1, 2).string(item.no);
    ws.cell(idx+1, 3).string(category[item.title-1]);
    ws.cell(idx+1, 4).number(item.cnt);
  })

  let filename = `${path}Excel.xlsx`;

  console.log(filename);
  wb.write(filename);

}

createExcel();