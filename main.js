


/*component app*/
function MojKomponent2(){
    return(
<div className="div1">
  
   <header>
      <h1>KURSY WALUT</h1> 
        <div className="money-day"><h4 id="date-now"></h4></div>
        <div className="wrapper">
        <div className="wrapper-item"><h3>USD</h3><h4 id="usa">1</h4></div>
        <div className="wrapper-item"><h3>EUR</h3><h4 id="eur"></h4></div>
        <div className="wrapper-item"><h3>GBP</h3><h4 id="gbp"></h4></div>
        <div className="wrapper-item"><h3>CHF</h3><h4 id="chf"></h4></div>
        <div className="wrapper-item"><h3>CAD</h3><h4 id="cad"></h4></div>
        </div>
   </header>
    
<section>
        <div class="wrapper-section"> <CalculatorSection/></div>
       
    
     </section>
        
        <FooterSection/>

      
        
</div>
    );
}





/*footer component*/



ReactDOM.render(

    <MojKomponent2/>,
  document.getElementById('app')
);

$(document).ready(function(){
    
    var tabelaKursu=[];
    

           $.ajax({  
            url: 'http://api.nbp.pl/api/exchangerates/tables/a/', 
           
        
        
            type: 'GET',  
            
            dataType: 'json',  
           
            success: function(data, textStatus, xhr) {  
            
                console.log(data[0].rates[1].mid); 
                
                console.log(data[0].effectiveDate);
                
                console.log(data[0]);
                
                console.log(data[0].rates);
                
                
                
                var test1=data[0].rates;
                 var ul1=document.createElement('ul');
               document.body.appendChild(ul1);
                
                    var tab1=document.getElementById('tabela3');
                 var tab33 =document.getElementById('tabelka2');
                
           for(var i=0;i<test1.length;i++){
               console.log(i +test1[i].currency);
      
               
               
           var tr1=document.createElement('tr');
              var tabele=document.getElementById('tabela3');
             
               var td1=document.createElement('td');
               var td1Text=document.createTextNode(test1[i].currency);
               
               var td2=document.createElement('td');
               var td2Text=document.createTextNode(test1[i].code);
               
               var td3=document.createElement('td');
               var td3Text=document.createTextNode(test1[i].mid);
               
               
               
               td1.appendChild(td1Text);
               td2.appendChild(td2Text);
               td3.appendChild(td3Text);
              tr1.appendChild(td1);
               tr1.appendChild(td2);
               tr1.appendChild(td3);
               
               
      tab33.appendChild(tr1);
              
             
              
              
           }
                 
               
                
                
               
                
                
              
             
                
                $('#usa').html(data[0].rates[1].mid);
                tabelaKursu.push( data[0].rates[1].mid)   ;
          console.log("sprawdzam" +" "+tabelaKursu[0]);
                
           
              var opcja1=  document.getElementById('option1').value;
              console.log(opcja1 + "value select");
                
                
                     var inputValue1= document.getElementById('addMoney').value;
                   console.log(inputValue1);
                var select1=document.getElementById('getPrice').value;
              
                ;
                
                
                console.log(opcja1 + "dodane z bazy");
                
              
                
            
                
           
                
            
 
              $('#eur').html(data[0].rates[7].mid);
                  $('#eur').html(data[0].rates[7].mid);
                  $('#gbp').html(data[0].rates[10].mid);
                 $('#chf').html(data[0].rates[9].mid);
                 $('#cad').html(data[0].rates[4].mid);
                $('#date-now').html("kurs z dnia" +" "+ data[0].effectiveDate);
              
                
                
                     
               $('#sprawdzam').click(function(){
                
                   
                   document.getElementById('changeMoney').innerHTML=inputValue1*select1;
               });

            },  
            error: function(xhr, textStatus, errorThrown) {  
                console.log('Error in Database');  
           
                
            }  

           
        });


var tabelkaNowa=document.getElementById('tabelka');
    

    
    


})



