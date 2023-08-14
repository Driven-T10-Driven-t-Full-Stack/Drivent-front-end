import styled from 'styled-components';
import githubicon from '../../assets/images/github-icon.png';

function redirectToGitHub() {
  const GITHUB_URL = 'https://github.com/login/oauth/authorize';
  const CLIENT_ID = '9c713ab79d414998c315';
  const params = new URLSearchParams({
    response_type: 'code',
    scope: 'user',
    client_id: CLIENT_ID,
    redirect_uri: 'http://localhost:3000/dashboard/subscription',
  });
  
  const authURL = `${GITHUB_URL}?${params.toString()}`;
  window.location.href = authURL;
}
  
export default function GitHubLogin() {
  return (
    <DivButton>
      <img  src={githubicon} alt='github-logo' />
      <button onClick={redirectToGitHub}>Entrar com GitHub</button>
    </DivButton>
  );
}

const DivButton = styled.div `
    display: flex;
    background-color: black;

    img {
        width: 30px;
        height: 30px;
    }

    button {
        background-color: black;
        color: white;
        border-style: none;
    }
`;
