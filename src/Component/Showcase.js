import bgDeskop from '../image/bg-intro-desktop.svg';

const Showcase = () => {
  return (<div className='showcase' style={{backgoroundColor: "black", backgroundImage: {bgDeskop}}}>
      <h1>Next generation digital banking</h1>
      <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more. </p>
    <button> Request Invite</button>
  </div>);
};

export default Showcase;
