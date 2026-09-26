import React from 'react'
import Card from './Card'


const App = () => {
  
  const jobs = [
  {
    brandLogo: "https://imgs.search.brave.com/jkbMhUzFlfiqzmU4cnbqA5ScYzzLfJqTT1pJXORG2CM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/VEl3aMS074IZQQkN2i77qZvWyDRkzm3riKRj0GW7tCI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzU5OC9zbWFs/bC9taWNyb3NvZnQt/bG9nby1taWNyb3Nv/ZnQtaWNvbi1mcmVl/LWZyZWUtdmVjdG9y/LmpwZw",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/6MKdqQZG4gINvaYOXN_vTe9h7BSr81eS-NnYxfCW1Rg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzgv/ODYxLzgzOS9zbWFs/bC9hbWF6b24tbG9n/by1vbi1hLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtYW1hem9u/LWUtY29tbWVyY2Ut/cmV0YWlsZXItbG9n/by1hbWF6b24tYXBw/LWljb24tZnJlZS1w/bmcucG5n",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$42/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/nvgxp2CWGH1NghV8Nz5VPmdyEUIAlScJRVNegnL75wM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMxOS9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLXdpdGgtYmxh/Y2stYmFja2dyb3Vu/ZC1mcmVlLXZlY3Rv/ci5qcGc",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/dGc_itchNk6LxNSa1IxvwupYs3QILcTqB3M1zHajlvo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8zMy82/MjUvSEQtd2FsbHBh/cGVyLWFwcGxlLWFw/cGxlLWxvZ28taXBo/b25lLWxvZ28tcGhv/bmUtdGh1bWJuYWls/LmpwZw",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/JjV69kztwJioOxZVE3g4KVkeI75OX-tp_TY4cCGZQLg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW5ldGZsaXgtbG9n/by1pY29uLXN2Zy1k/b3dubG9hZC1wbmct/MzAzMDE2OS5wbmc_/Zj13ZWJwJnc9MTI4",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/UV_2IPveiQfDuC-eBloepf_SzptOypWaoyBdE3Y1mYg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bnZpZGlhLmNvbS9j/b250ZW50L252aWRp/YUdEQy9pbi9lbl9J/Ti9hYm91dC1udmlk/aWEvbGVnYWwtaW5m/by9sb2dvLWJyYW5k/LXVzYWdlL19qY3Jf/Y29udGVudC9yb290/L3Jlc3BvbnNpdmVn/cmlkL252X2NvbnRh/aW5lcl8zOTI5MjE3/MDUvbnZfY29udGFp/bmVyXzQxMjA1NTQ4/Ni9udl9pbWFnZS5j/b3JlaW1nLnN2Zy8x/Nzc2MDc3ODE3ODQ0/L252aWRpYS1sb2dv/LWhvcnouc3Zn",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/FWgNn9SxO0f19OkmzTLsdnQFVDGsSFUdcQq3hCtMWzE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNC8x/MC9hZG9iZS1sb2dv/LTIwMTctMzAweDMw/MC5wbmc",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/IZi9lXgrQlyo1HfRjr0EWG4cxjEOkAwiq38uWtwTAXI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aGF0Y2h3aXNlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wMS9pbWFnZS0x/Mi5wbmc",
    companyName: "IBM",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$32/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/bn1r3HjCEj-b5DBUEQWq70qahli-9Dwc0DFtduhqKpw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zYWxl/c2ZvcmNlLWxvZ28t/aWNvbi12ZWN0b3It/bG9nb3MtbG9nby1p/Y29ucy1zZXQtc29j/aWFsLW1lZGlhLWZs/YXQtYmFubmVyLXZl/Y3RvcnMtc3ZnLWVw/cy1qcGctanBlZy1l/bWJsZW0td2FsbHBh/cGVyLWJhY2tncm91/bmQtMjA4MzMyODUz/LmpwZw",
    companyName: "Salesforce",
    datePosted: "10 weeks ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$44/hour",
    location: "Hyderabad, India"
  }
];

  return (
    <div className = 'container'>
     {jobs.map(function(elem){
        return <Card company = {elem.companyName} img = {elem.brandLogo} date = {elem.datePosted} post = {elem.post} tag2 = {elem.tag2} tag1 = {elem.tag1} pay = {elem.pay} location = {elem.location}/>
     })}
    </div>
  )
}

export default App