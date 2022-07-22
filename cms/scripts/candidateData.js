class Candidate{
    constructor(id,name,qualification,experience,job,stage,score){
        this.id = id
        this.name = name
        this.qualification = qualification
        this.experience = experience
        this.job = job
        this.stage = stage
        this.score = score
    }
}
class NewCandidate extends Candidate{
    constructor(id,name,qualification,experience,job,stage,score,image_url,email,mobile){
        super(id,name,qualification,experience,job,stage,score)
        this.image_url = image_url
        this.email = email
        this.mobile = mobile
    }
}

let dummyData = [
    {
        id:1,
        name:'ram',
        qualification:'graduate',
        experience:'3',
        job:'sde-1',
        stage:'interview',
        score:'70'       
    },
    {
        id:2,
        name:'chandu',
        qualification:'engineer',
        experience:'4',
        job:'sde-1',
        stage:'managerial',
        score:'35'       
    },
    {
        id:3,
        name:'nrupul',
        qualification:'post-graduate',
        experience:'5',
        job:'sde-1',
        stage:'technical',
        score:'96'       
    },
    {
        id:4,
        name:'yogesh',
        qualification:'graduate',
        experience:'7',
        job:'sde-1',
        stage:'technical',
        score:'86'       
    },
    {
        id:5,
        name:'chandra',
        qualification:'graduate',
        experience:'0',
        job:'sde-1',
        stage:'assesment',
        score:'95'       
    },
    {
        id:6,
        name:'bhatt',
        qualification:'graduate',
        experience:'2',
        job:'sde-1',
        stage:'shortlisted',
        score:'20'       
    },
    {
        id:7,
        name:'venu',
        qualification:'graduate',
        experience:'1',
        job:'sde-1',
        stage:'hired',
        score:'100'       
    },
    {
        id:8,
        name:'aditya',
        qualification:'graduate',
        experience:'3',
        job:'sde-1',
        stage:'hired',
        score:'50'       
    },
    {
        id:9,
        name:'ankush',
        qualification:'graduate',
        experience:'11',
        job:'sde-1',
        stage:'interview',
        score:'95'       
    },
    {
        id:10,
        name:'samiksha',
        qualification:'graduate',
        experience:'10',
        job:'sde-1',
        stage:'technical',
        score:'60'       
    },
    {
        id:1,
        name:'ram',
        qualification:'graduate',
        experience:'3',
        job:'sde-1',
        stage:'technical-2',
        score:'70'       
    },
    {
        id:2,
        name:'chandu',
        qualification:'engineer',
        experience:'4',
        job:'sde-1',
        stage:'management',
        score:'35'       
    },
    {
        id:3,
        name:'nrupul',
        qualification:'post-graduate',
        experience:'5',
        job:'sde-1',
        stage:'management',
        score:'96'       
    },
    {
        id:4,
        name:'yogesh',
        qualification:'graduate',
        experience:'7',
        job:'sde-1',
        stage:'technical',
        score:'86'       
    },
    {
        id:5,
        name:'chandra',
        qualification:'graduate',
        experience:'0',
        job:'sde-1',
        stage:'hr',
        score:'95'       
    },
    {
        id:6,
        name:'bhatt',
        qualification:'graduate',
        experience:'2',
        job:'sde-1',
        stage:'hr',
        score:'20'       
    },
    {
        id:7,
        name:'venu',
        qualification:'graduate',
        experience:'1',
        job:'sde-1',
        stage:'hr',
        score:'100'       
    },
    {
        id:8,
        name:'aditya',
        qualification:'graduate',
        experience:'3',
        job:'sde-1',
        stage:'hired',
        score:'50'       
    },
    {
        id:9,
        name:'ankush',
        qualification:'graduate',
        experience:'11',
        job:'sde-1',
        stage:'shortlisted',
        score:'95'       
    },
    {
        id:10,
        name:'samiksha',
        qualification:'graduate',
        experience:'10',
        job:'sde-1',
        stage:'shortlisted',
        score:'60'       
    },
]
window.addEventListener('load',()=>{
    // localStorage.setItem('candidateData',JSON.stringify(dummyData))
    makeDashboardData()
})
let makeDashboardData = ()=>{
    let dummyData = JSON.parse(localStorage.getItem('dummyData')) || []
    let newCandidate = JSON.parse(localStorage.getItem('newCandidate')) || []
    let followed = JSON.parse(localStorage.getItem('followed')) || []
    let qualified = JSON.parse(localStorage.getItem('qualified')) || []
    let candidateData = JSON.parse(localStorage.getItem('candidateData')) || []
    if(newCandidate.length != 0 || followed.length != 0 || qualified.length != 0){
      candidateData = [...newCandidate,...followed,...qualified]
    }else{
      candidateData = [...dummyData]
    }
    console.log(candidateData)
    localStorage.setItem('candidateData',JSON.stringify(candidateData))
  }  
