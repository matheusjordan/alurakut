import MainGrid from '../src/Components/MainGrid'
import Box from '../src/Components/Box';
import ProfileRelationsBoxWrapper from '../src/Components/ProfileRelationsBoxWrapper';

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/Lib/AlurakutCommons';

const ProfilePicture = (props) => {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`}></img>
    </Box>
  )
}

export default function Home() {
  const githubUser = 'matheusjordan';
  const githubFriends = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div style={{ gridArea: 'profileArea'}}>
          <ProfilePicture githubUser={githubUser}/>

        </div>
        <div style={{ gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">Bem Vindo(a)</h1>
            <OrkutNostalgicIconSet/>
          
          </Box>
        </div>
        <div style={{ gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos da Comunidade ({githubFriends.length})
            </h2>
            <ul>
              {githubFriends.map(friend => {
                return (
                  <li>
                    <a href={`users/${friend}`} key={friend}>
                      <img src={`https://github.com/${friend}.png`}/>
                      <span>{friend}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>

        </div>
        
      </MainGrid>
    </>
  )
}
