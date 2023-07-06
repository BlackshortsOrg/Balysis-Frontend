import React, { useState,useContext, useEffect } from "react";
import {BsSearch} from 'react-icons/bs'
import {TbTriangleInvertedFilled} from 'react-icons/tb'
import {RxTriangleDown} from 'react-icons/rx'
import { SearchContext } from "../Context/SearchContext";
import { FilterContext } from "../Context/FilterContext";
import { md } from "../Data/marketplacedata";
import MarketC from "../Components/MarketC";
import { Pagination } from "@mui/material";
export default function Marketplace(){
    const [isOpen,setisOpen] = useState(false);
    const [w,setW] = useState(null);
    const [select,setSelect] = useState('');
    const [selectroi,setSelectroi] = useState('');
    const pagesize = 12;
    const [pagination,setPagination] = useState({
        count : 0,
        from : 0,
        to : pagesize
    });
    const trianglestyle = {
        transform : isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition : 'transform 0.9s ease', 
        position:'absolute',marginRight:'0',right:'0'
    }
    const handleClick = ()=>{
        setisOpen(!isOpen);
    }
    const handlex = (e)=>{
         if(w===null){
            setW(e.target.textContent);
         }else{
            if(e.target.textContent===w){
                setW(null);
            }else{
                setW(e.target.textContent);
            }
         }
         console.log(w);
         setisOpen(!isOpen);
    }
    const handley = (e)=>{
        if(select.length<=1){
            setSelect(e.target.value);
        }else{
            if(e.target.value===select){
                setSelect('');
            }else{
                setSelect(e.target.value)
            }
        }
    }
    const handlez = (e)=>{
        if(selectroi.length<=1){
            setSelectroi(e.target.value)
        }else{
            if(e.target.value===selectroi){
                setSelectroi('');
            }else{
                setSelectroi(e.target.value)
            }
        }
    }
    const {search,setSearch} = useContext(SearchContext);
    const {filterr,setFilter} = useContext(FilterContext);
    // console.log(search)
    const [searchProducts,setSearchProducts] = useState([]);
    const [filterProducts,setFilterProducts] = useState([]);
    const [display,setDisplay] = useState([]);
   const searching = ()=>{
    return new Promise((resolve, reject)=>{
           const temp = md.filter((x)=>{
            // console.log(x.name.toLowerCase());
           return search.toLowerCase()==='' ? x : x.name.toLowerCase().includes(search.toLowerCase())
           }) 
        //    console.log(temp);
           resolve(temp);
    })
   }
   useEffect(()=>{
      searching().then(data=>{setSearchProducts(data)}).catch((error)=>{console.log(error.message)});

   },[search])
//    console.log("logging out searchproducts",searchProducts,searchProducts.length);
//    console.log(searchProducts[0]);
// useEffect(()=>{
//     setFilter([select,selectroi]);
// },[])
const filtering = ()=>{

    return new Promise((resolve, reject)=>{
       if(select==='' && selectroi===''){
        resolve(searchProducts);
       }else{
               const temp = searchProducts.filter(x=>{
                    // let one;
                    if(select===''){
                        // one = x;
                    }else{
                        let compare = select.split('-');
                    
                        if(Number(compare[0]) > x.capital){return false;}
                        if(compare.length>=2 && compare[1] < x.capital){return false;}

                    }
                    if(!(selectroi==='')){
                        let compare = selectroi.split('-');
                        console.log(compare)
                        if(compare.length>1){
                            // console.log(typeof Number(compare[0]))
                          if(Number(compare[0])<x.roi){return false;}
                          if(Number(compare[1]) > x.roi){return false;}
                        }else{
                           if(compare[0] ==='30'){
                            if(x.roi<30)return false;
                           }else{
                            if(x.roi>10)return false;
                           }
                        }
                    }
                return x;})
       resolve(temp);}
    })
}
useEffect(()=>{
    filtering().then(data=>setFilterProducts(data)).catch(error=>console.log(error.message));
},[select,selectroi,searchProducts])
// console.log(searchProducts.length);
// console.log(filterProducts.length);
// console.log(filterProducts);
const displaying = ()=>{
    return new Promise((resolve, reject)=>{
        if(w===null){
            resolve(filterProducts);
        }else if(w==="Drawdown"){
            resolve([...filterProducts].sort((a,b)=>{return a.drawdown-b.drawdown}));
        }else if(w==="ROI: High to Low"){
            resolve([...filterProducts].sort((a,b)=>{return b.roi-a.roi}))
        }else if(w==="ROI: Low to High"){
            resolve([...filterProducts].sort((a,b)=>{return a.roi-b.roi}))
        }else if(w==="Capital: Low to High"){
            resolve([...filterProducts].sort((a,b)=>{return a.capital-b.capital}))
        }else if(w==="Capital: High to Low"){
            resolve([...filterProducts].sort((a,b)=>{return b.capital-a.capital}))
        }else if(w==="Rating"){
            resolve([...filterProducts].sort((a,b)=>{return b.rating-a.rating}));
        }
    })
}
useEffect(()=>{
displaying().then(data=>setDisplay(data)).catch((error)=>{console,log(error.message)});
},[w,filterProducts])
// console.log(display);
// console.log(display.slice(11,19));

const [pagep,setpagep] = useState([]);
const service = (from,to)=>{
return new Promise((resolve,reject)=>{
    const d = display.slice(from,to);
console.log(d);
    resolve({
        count : display.length,
        data : d
    })
})
}
const handlepageChange = (e,page)=>{
const from = (page-1)*pagesize;
const to = page*pagesize;
setPagination({...pagination, from:from, to:to});
}
// console.log(pagination.from,pagination.to)
useEffect(()=>{
  service(pagination.from,pagination.to).then(d=>{setpagep(d.data)
   setPagination({...pagination,count : d.count})
//    console.log(d);
})
},[display,pagination.from,pagination.to])
console.log(pagep);
    return(
        <div className="marketplace">
            <div className="marketplace-content" style={{}}>
                <div className="marketplace-content-left" style={{boxSizing:'content-box'}}>
                      <div className="marketplace-search" style={{position:'relative', display:'flex', alignItems:'center'}}>
                         <BsSearch color="grey" size={27} style={{marginTop:'1%',marginLeft:'4%'}}/>
                         <input onChange = {(e)=>setSearch(e.target.value)}type = "search"  placeholder="Search" style={{height:'100%',width:'75%',marginTop:'0',marginLeft:'3%',outline:'none',border:'none',fontFamily:'Montserrat',fontSize:'110%',color:'grey',fontWeight:'100'}}/>
                      </div>
                      <div style={{position:'relative'}}>
                      <div className="marketplace-sorting" onClick = {handleClick} style={{display:'flex',alignItems:'center',position:'relative'}}>
                          <span style={{color:"black", fontFamily:'Montserrat',fontWeight:'700',fontSize:'110%',marginLeft:'6%'}}>{w ? w : "Sort By"}</span>
                          {/* {w && <span style={{fontWeight:'100',fontSize:'50%'}}> {w}</span> } */}
                           <RxTriangleDown size={25} style={trianglestyle}color="black"/>
                      </div>
                      <div className ={`marketplace-sorting-list ${isOpen ? 'active' : 'notactive'}`} style={{color:'black'}}>
                        {/* <div className="">
                            Capital Required
                        </div> */}
                        <div className="marketplace-sorting-list-content" onClick={handlex}>
                            <span>Drawdown</span>
                        </div>
                        <div className="marketplace-sorting-list-content" onClick={handlex}>
                            <span>ROI: High to Low</span>
                        </div>
                        <div className="marketplace-sorting-list-content" onClick={handlex}>
                            <span>ROI: Low to High</span>
                        </div>
                        <div className="marketplace-sorting-list-content" onClick={handlex}>
                            <span>Capital: Low to High</span>
                        </div>
                        <div className="marketplace-sorting-list-content" onClick={handlex}>
                            <span>Capital: High to Low</span>
                        </div>
                        <div className="marketplace-sorting-list-content" onClick={handlex}>
                            <span>Rating</span>
                        </div>
                      </div>
                      </div>
                      <div className="marketplace-content-c" style={{color:'black',marginLeft:'8%',fontFamily:'Montserrat', marginTop:'5%',fontWeight:'700',fontSize:'160%'}}>
                   Capital Required
                </div>
                <div className="marketplace-content-cc">
                <span><input type="radio" id ="0-10000" name="capital-required" value="0-10000" checked = {select==="0-10000"} onClick={handley}/> </span><label style={{color:'black'}} htmlFor="0-10000">Under 10K</label><br></br>
                <input type="radio" id ="10000-50000" name="capital-required" value="10000-50000" onClick={handley} checked = {select==="10000-50000"}/> <label style={{color:'black'}} htmlFor="10000-50000">10K-50K</label><br></br>
                <input type="radio" id ="50000-100000" name="capital-required" checked = {select==="50000-100000" }value="50000-100000"onClick={handley} /> <label style={{color:'black'}} htmlFor="50000-100000">50K-100K</label><br></br>
                <input type="radio" id ="100000-250000" name="capital-required" value="100000-250000" onClick={handley} checked = {select==="100000-250000"}/> <label style={{color:'black'}} htmlFor="100000-250000" >100K-250K</label><br></br>
                <input type="radio" id ="250000-500000" name="capital-required" value="250000-500000" onClick={handley} checked = {select==="250000-500000"}/> <label style={{color:'black'}} htmlFor="250000-500000">250K-500K</label><br></br>
                <input type="radio" id ="500000" name="capital-required" value="500000" onClick={handley} checked = {select==="500000"} /> <label style={{color:'black'}} htmlFor="500000">500K+</label><br></br>
                </div>
                <div className="marketplace-content-c" style={{color:'black',marginLeft:'8%',fontFamily:'Montserrat', marginTop:'5%',fontWeight:'700',fontSize:'160%'}}>
                   ROI
                </div>
                <div className="marketplace-content-cc">
                <input type="radio" id ="Over 30%" name="roi-required" value="30" onClick={handlez} checked = {selectroi==="30"}/>
                <label style={{color:'black'}} htmlFor="Over 30%">Over 30%</label><br></br>
                <input type="radio" id ="30%-20%" name="roi-required" value="30-20" onClick={handlez} checked = {selectroi==="30-20"}/> <label style={{color:'black'}} htmlFor="30%-20%">30%-20%</label><br></br>
                <input type="radio" id ="20%-10%" name="roi-required" value="20-10" onClick={handlez} checked={selectroi==="20-10"}/> <label style={{color:'black'}} htmlFor="20%-10%">20%-10%</label><br></br>
                <input type="radio" id ="Below 10%" name="roi-required" value="10" onClick={handlez} checked = {selectroi==="10"}/> <label style={{color:'black'}} htmlFor="Below 10%" >Below 10%</label><br></br>
                </div>
                </div>
                <div className="marketplace-content-right">
                    {pagep.map((x)=>{
                        return <MarketC key={x.unique_id} {...x}/>
                    })}
                    <div className="pagination">
                    <Pagination count={Math.ceil(pagination.count/pagesize)} color = "primary"onChange={handlepageChange} showFirstButton showLastButton size="large"/></div>
                </div>
            </div>
        </div>
    )
}