export const CONFIG = {
  emailPrimary: 'chertok.r@northeastern.edu',
  emailSecondary: 'rchertok@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rachel-chertok/',
  github: 'https://github.com/chertokr',
  headshot: '/headshot.jpg',
  resumeEmbedUrl: 'https://docs.google.com/document/d/1lekswDOjRL-_drsko2MIkdRvySU2ERHRW2gSqAOymQ4/edit?usp=sharing'
}

export function getDrivePreview(url){
  if(!url) return null
  try{
    const m = url.match(/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/)
    const id = m && m[1]
    if(id) return `https://drive.google.com/file/d/${id}/preview`
  }catch(e){}
  return url
}
